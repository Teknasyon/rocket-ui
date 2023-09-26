<script setup lang="ts">
import './tooltip.css';
import { computed, onMounted, ref, watchEffect } from 'vue';
import {
  Placement,
  type Placements,
  Trigger,
  type Triggers,
  update,
} from './common';

export interface IProps {
  /**
   * Placement of the tooltip
   * @type Placements
   * @default Placement.Top
   * @example
   * <Tooltip placement="top" />
   */
  placement?: Placements

  /**
   * Text of the tooltip content
   * @type string
   * @default ''
   * @example
   * <Tooltip text="Tooltip" />
   */
  text?: string

  /**
   * Dark theme of the tooltip deneme 1 2 3
   * @type boolean
   * @default true
   * @example
   * <Tooltip dark />
   */
  dark?: boolean

  /**
   * Light theme of the tooltip
   * @type boolean
   * @default false
   * @example
   * <Tooltip light />
   */
  light?: boolean

  /**
   * Triggers of the tooltip
   * @type Triggers
   * @default Trigger.Hover
   * @example
   * <Tooltip triggers="hover" />
   */
  triggers?: Array<Triggers>

  /**
   * Auto hide of the tooltip
   * @type boolean
   * @default true
   * @example
   * <Tooltip autoHide />
   */
  autoHide?: boolean

  /**
   * Hide delay of the tooltip
   * @type number
   * @default 3000
   * @example
   * <Tooltip hideDelay={3000} />
   */
  hideDelay?: number

  /**
   * Show delay of the tooltip
   * @type number
   * @default 0
   * @example
   * <Tooltip showDelay={0} />
   */
  showDelay?: number

  /**
   * Shown state of the tooltip
   * @type boolean
   * @default false
   * @example
   * <Tooltip shown />
   */
  shown?: boolean

  /**
   * Disabled state of the tooltip
   * @type boolean
   * @default false
   * @example
   * <Tooltip disabled />
   */
  disabled?: boolean

  /**
   * Offset of the tooltip
   * @type number
   * @default 0
   * @example
   * <Tooltip offset={0} />
   * @link https://floating-ui.com/docs/tutorial#offset-middleware
   */
  offset?: number

  /**
   * Padding of the tooltip
   * @type number
   * @default 2
   * @example
   * <Tooltip padding={0} />
   * @link https://floating-ui.com/docs/tutorial#shift-middleware
   */
  padding?: number

  /**
   * Outside click of the tooltip
   * @type boolean
   * @default false
   * @example
   * <Tooltip outsideClick />
   */
  outsideClick?: boolean

  /**
   * Trigger content of the tooltip
   * @type string
   * @default ''
   * @example
   * <Tooltip triggerContent="Trigger" />
   */
  triggerContent?: string

  /**
   * Resizable of the tooltip
   * @type boolean
   * @default true
   * @example
   * <Tooltip resizable />
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
   */
  resizable?: boolean

  /**
   * Trigger class of the tooltip
   * @type string
   * @default ''
   * @example
   * <Tooltip triggerClass="trigger" />
   */
  triggerClass?: string

  /**
   * Tooltip class of the tooltip
   * @type string
   * @default ''
   * @example
   * <Tooltip tooltipClass="tooltip" />
   */
  tooltipClass?: string
}
const props = withDefaults(defineProps<IProps>(), {
  placement: Placement.Top,
  text: '',
  dark: true,
  light: false,
  triggers: () => [Trigger.Hover],
  autoHide: true,
  hideDelay: 3000,
  showDelay: 300,
  shown: false,
  disabled: false,
  offset: 0,
  padding: 2,
  outsideClick: false,
  triggerContent: '',
  resizable: true,
  triggerClass: '',
  tooltipClass: '',
});
const emit = defineEmits(['show', 'hide']);

// @ts-expect-error
const trigger = ref<HTMLDivElement>(null);
// @ts-expect-error
const tooltip = ref<HTMLDivElement>(null);
// @ts-expect-error
const arrowElement = ref<HTMLDivElement>(null);

function showTooltip() {
  const { placement, offset, padding, disabled, showDelay } = props;
  if (disabled)
    return;
  tooltip.value.style.display = 'block';
  // document.body.appendChild(tooltip.value);
  emit('show');
  update(trigger, tooltip, arrowElement, placement, offset, padding, showDelay);
  handleAutoHide();
  if (props.outsideClick)
    toggleOutsideClick('add');
}

function hideTooltip() {
  if (props.disabled || !tooltip.value)
    return;
  tooltip.value.style.display = '';
  emit('hide');
  // document.removeEventListener('click', hideTooltip);
  // document.body.removeChild(tooltip.value)
  if (props.outsideClick)
    toggleOutsideClick('remove');
}

function handleAutoHide() {
  if (props.autoHide) {
    setTimeout(() => {
      hideTooltip();
    }, props.hideDelay);
  }
}

function toggleOutsideClick(toggle: string) {
  if (toggle === 'add')
    document.addEventListener('click', hideTooltip);

  if (toggle === 'remove')
    document.removeEventListener('click', hideTooltip);
}

function onClick() {
  if (props.disabled)
    return;
  if (props.triggers.includes(Trigger.Click)) {
    if (tooltip.value.style.display === 'block')
      hideTooltip();
    else showTooltip();
  }
}

function onMouseEnter() {
  if (props.disabled)
    return;
  if (props.triggers.includes(Trigger.Hover))
    showTooltip();
}

function onMouseLeave() {
  if (props.disabled)
    return;
  if (tooltip.value.style.display === '' && props.triggers.includes(Trigger.Hover))
    showTooltip();

  else if (
    tooltip.value.style.display !== ''
    && props.triggers.includes(Trigger.Hover)
  )
    hideTooltip();
}

function onMouseMove() {
  const { placement, offset, padding, disabled, showDelay } = props;
  if (disabled)
    return;
  if (props.triggers.includes(Trigger.Hover))
    update(trigger, tooltip, arrowElement, placement, offset, padding, showDelay);
}

const classes = computed(() => {
  return {
    'tooltip': true,
    'tooltip--dark': props.dark,
    'tooltip--light': props.light,
  };
});

/**
 * Listen the resize event of window
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
 */
window.onresize = () => {
  const { placement, offset, padding, disabled, showDelay } = props;
  if (disabled)
    return;
  if (props.resizable)
    update(trigger, tooltip, arrowElement, placement, offset, padding, showDelay);
};

watchEffect(
  () => {
    if (props.disabled)
      return;
    if (props.shown && props.triggers.includes(Trigger.Manual))
      showTooltip();
    else if (!props.shown && props.triggers.includes(Trigger.Manual))
      hideTooltip();
  },
  { flush: 'post' } // this is important to avoid infinite loop & for fire on mounted
);

onMounted(() => {
  hideTooltip();
});
</script>

<template>
  <div
    ref="trigger"
    :aria-disabled="props.disabled"
    class="trigger"
    :class="[triggerClass]"
    @click.stop="onClick"
    @mouseenter.stop="onMouseEnter"
    @mouseleave.stop="onMouseLeave"
    @mousemove.stop="onMouseMove"
  >
    <slot
      :activators="{
        click: onClick,
        mouseenter: onMouseEnter,
        mouseleave: onMouseLeave,
        mousemove: onMouseMove,
      }"
    >
      <div v-html="props.triggerContent" />
    </slot>
  </div>
  <Teleport to="body">
    <div
      id="tooltip"
      ref="tooltip"
      :class="[classes, tooltipClass]"
      role="tooltip"
    >
      <slot name="content">
        <div
          v-if="props.text"
          class="tooltip__content"
          :class="{
            'tooltip__content--dark': props.dark,
            'tooltip__content--light': props.light,
          }"
        >
          {{ props.text }}
        </div>
        <div
          v-if="props.text"
          id="arrow"
          ref="arrowElement"
          class="tooltip__arrow"
          :class="{
            'tooltip__arrow--dark': props.dark,
            'tooltip__arrow--light': props.light,
          }"
        />
      </slot>
    </div>
  </Teleport>
</template>
