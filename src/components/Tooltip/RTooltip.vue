<script setup lang="ts">
import './tooltip.css'
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { createGuid } from '../../utils/helpers'
import {
  Placement,
  type Placements,
  Theme,
  Trigger,
  type Triggers,
  update,
} from './popper'

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
  triggerClass?: string | string[]

  /**
   * Tooltip class of the tooltip
   * @type string
   * @default ''
   * @example
   * <Tooltip tooltipClass="tooltip" />
   */
  tooltipClass?: string | string[]

  type?: Theme | string
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
  type: Theme.Tooltip,
})
const emit = defineEmits(['show', 'hide'])

const trigger = ref()

const tooltip = ref()
const arrowElement = ref()

const tooltipId = createGuid()

async function showTooltip() {
  if (props.disabled || !tooltip.value)
    return

  const otherTooltips = document.querySelectorAll('.r-tooltip--active') as unknown as HTMLElement[]

  if (otherTooltips.length > 0) {
    otherTooltips.forEach((otherTooltip: HTMLElement) => {
      otherTooltip.style.display = ''
      otherTooltip.classList.remove('r-tooltip--active')
      otherTooltip.dataset.show = 'false'
      emit('hide', otherTooltip.id)
    })
  }

  if (tooltip.value.classList.contains('r-tooltip--active')) {
    hideTooltip()
  }
  else {
    handleUpdate()
    tooltip.value.style.display = 'block'
    tooltip.value.classList.add('r-tooltip--active')
    tooltip.value.dataset.show = 'true'
    emit('show', tooltip.value.id)
    handleAutoHide()
  }
}

function hideTooltip(e: Event | null = null) {
  if (props.disabled || !tooltip.value)
    return
  tooltip.value.style.display = ''
  tooltip.value.classList.remove('r-tooltip--active')
  tooltip.value.dataset.show = 'false'
  emit('hide', tooltip.value.id)
}

function handleAutoHide() {
  if (props.autoHide) {
    setTimeout(() => {
      hideTooltip()
    }, props.hideDelay)
  }
}

function onClick(e: MouseEvent) {
  if (props.disabled)
    return

  if (props.triggers.includes(Trigger.Click)) {
    if (tooltip.value.style.display === 'block')
      hideTooltip()
    else showTooltip()
  }
}

function onMouseEnter() {
  if (props.disabled)
    return
  if (props.triggers.includes(Trigger.Hover))
    showTooltip()
}

function onMouseLeave() {
  if (props.disabled)
    return
  if (tooltip.value.style.display === '' && props.triggers.includes(Trigger.Hover))
    showTooltip()

  else if (
    tooltip.value.style.display !== ''
    && props.triggers.includes(Trigger.Hover)
  )
    hideTooltip()
}

function onMouseMove() {
  if (props.triggers.includes(Trigger.Hover))
    handleUpdate()
}

function handleUpdate(extraData?: any) {
  const { placement, offset, padding, disabled, showDelay, type } = props
  if (disabled)
    return
  update(trigger, tooltip, arrowElement, placement, offset, padding, showDelay, type, extraData)
}

const classes = computed(() => {
  return {
    'r-tooltip': true,
    'r-tooltip--dark': props.dark && !props.light,
    'r-tooltip--light': props.light,
  }
})

/**
 * Listen the resize event of window
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
 */
window.onresize = () => {
  if (props.resizable)
    handleUpdate()
}

watchEffect(
  () => {
    if (props.disabled)
      return
    if (props.shown && props.triggers.includes(Trigger.Manual))
      showTooltip()
    else if (!props.shown && props.triggers.includes(Trigger.Manual))
      hideTooltip()
  },
  { flush: 'post' }, // this is important to avoid infinite loop & for fire on mounted
)

onMounted(() => {
  if (props.resizable)
    trigger.value?.parentElement?.parentElement.addEventListener('scroll', handleUpdate())

  onClickOutside(trigger, (e: MouseEvent) => {
    if (tooltip.value.classList.contains('r-tooltip--active'))
      hideTooltip(e)
  }, { ignore: [tooltip] })

  if (props.type === Theme.Dropdown) {
    document.addEventListener('scroll', () => {
      handleUpdate()
    })
  }
})

onUnmounted(() => {
  if (props.resizable)
    trigger.value?.parentElement?.parentElement.removeEventListener('scroll', handleUpdate())

  if (tooltip.value)
    document.body.removeChild(tooltip.value)
})
</script>

<template>
  <div
    ref="trigger"
    :aria-disabled="props.disabled"
    class="r-tooltip-trigger"
    :class="triggerClass"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousemove="onMouseMove"
  >
    <slot
      :activators="{
        click: onClick,
        mouseenter: onMouseEnter,
        mouseleave: onMouseLeave,
        mousemove: onMouseMove,
      }"
      :tooltip-id="tooltipId"
      :update-position="handleUpdate"
    >
      <div v-html="props.triggerContent" />
    </slot>
  </div>
  <Teleport to="body">
    <div
      :id="tooltipId"
      ref="tooltip"
      :class="[classes, tooltipClass]"
      data-show="false"
      role="tooltip"
    >
      <slot :hide="hideTooltip" name="content" :update-position="handleUpdate">
        <div
          v-if="props.text"
          class="r-tooltip__content"
          :class="{
            'r-tooltip__content--dark': props.dark,
            'r-tooltip__content--light': props.light,
          }"
        >
          {{ props.text }}
        </div>
        <div
          v-if="props.text"
          id="arrow"
          ref="arrowElement"
          class="r-tooltip__arrow"
          :class="{
            'r-tooltip__arrow--dark': props.dark,
            'r-tooltip__arrow--light': props.light,
          }"
        />
      </slot>
    </div>
  </Teleport>
</template>
