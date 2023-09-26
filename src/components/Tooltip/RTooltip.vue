<script setup lang="ts">
import './tooltip.css';
import { computed, ref, watchEffect } from 'vue';
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
  triggers?: Triggers

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
  triggers: Trigger.Hover,
  autoHide: true,
  hideDelay: 3000,
  showDelay: 0,
  shown: false,
  disabled: false,
  offset: 0,
  padding: 2,
  outsideClick: false,
  triggerContent: '',
  resizable: true,
});
const emit = defineEmits(['show', 'hide']);

// @ts-expect-error
const trigger = ref<HTMLDivElement>(null);
// @ts-expect-error
const tooltip = ref<HTMLDivElement>(null);
// @ts-expect-error
const arrowElement = ref<HTMLDivElement>(null);

function showTooltip() {
  const { placement, offset, padding, disabled } = props;
  if (disabled)
    return;
  tooltip.value.style.display = 'block';
  emit('show');
  update(trigger, tooltip, arrowElement, placement, offset, padding);
  handleAutoHide();
  if (props.outsideClick)
    toggleOutsideClick('add');
}

function hideTooltip() {
  tooltip.value.style.display = '';
  emit('hide');
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
  if (props.triggers === Trigger.Click) {
    if (tooltip.value.style.display === 'block')
      hideTooltip();
    else showTooltip();
  }
}

function onMouseEnter() {
  if (props.disabled)
    return;
  if (props.triggers === Trigger.Hover)
    showTooltip();
}

function onMouseLeave() {
  if (props.disabled)
    return;
  if (tooltip.value.style.display === '' && props.triggers === Trigger.Hover)
    showTooltip();

  else if (
    tooltip.value.style.display !== ''
    && props.triggers === Trigger.Hover
  )
    hideTooltip();
}

function onMouseMove() {
  const { placement, offset, padding, disabled } = props;
  if (disabled)
    return;
  if (props.triggers === Trigger.Hover)
    update(trigger, tooltip, arrowElement, placement, offset, padding);
}

const classes = computed(() => {
  return {
    'tooltip': true,
    'tooltip--dark': props.dark,
    'tooltip--light': props.light,
    [`${props.tooltipClass}`]: true,
  };
});

/**
 * Listen the resize event of window
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
 */
window.onresize = () => {
  const { placement, offset, padding, disabled } = props;
  if (disabled)
    return;
  if (props.resizable)
    update(trigger, tooltip, arrowElement, placement, offset, padding);
};

watchEffect(
  () => {
    if (props.disabled)
      return;
    if (props.shown && props.triggers === Trigger.Manual)
      showTooltip();
  },
  { flush: 'post' } // this is important to avoid infinite loop & for fire on mounted
);

const animationDuration = computed(() => {
  return `${props.showDelay}ms`;
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
    <slot name="trigger" />

    <div v-if="!$slots.trigger" v-html="props.triggerContent" />
  </div>
  <Teleport to="body">
    <div
      id="tooltip"
      ref="tooltip"
      :class="classes"
      role="tooltip"
    >
      <slot name="content" />
      <div
        v-if="!$slots.content"
        class="tooltip__content"
        :class="{
          'tooltip__content--dark': props.dark,
          'tooltip__content--light': props.light,
        }"
      >
        {{ props.text }}
      </div>
      <div
        v-if="!$slots.content"
        id="arrow"
        ref="arrowElement"
        class="tooltip__arrow"
        :class="{
          'tooltip__arrow--dark': props.dark,
          'tooltip__arrow--light': props.light,
        }"
      />
    </div>
  </Teleport>
</template>

<style scoped>
.tooltip {
  animation-name: tooltip-show;
  animation-duration: v-bind('animationDuration');
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes tooltip-show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
