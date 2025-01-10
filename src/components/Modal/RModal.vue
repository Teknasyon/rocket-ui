<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'
import './modal.css'
import Icon from '../Icon/RIcon.vue'

export interface ModalProps {
  /**
   * modelValue the modal
   * @type boolean
   * @default false
   * @example
   * <Modal :modelValue="true" />
   */
  modelValue: boolean
  /**
   * Modal width is 100%
   * @type boolean
   * @default false
   * @example
   * <Modal block />
   */
  block?: boolean
  /**
   * Title of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal title="Modal Title" />
   */
  title?: string
  /**
   * Description of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal description="Modal Description" />
   */
  description?: string
  /**
   * Icon of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal icon="mdiMail" />
   */
  icon?: string

  /**
   * Width of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal width="500px" />
   */
  width?: string

  /**
   * Height of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal height="500px" />
   */
  height?: string

  /**
   * Close the modal when clicking outside
   * @type boolean
   * @default false
   * @example
   * <Modal :modelValue="true" :outsideClick="true" />
   */
  outsideClick?: boolean

  /**
   * Remove padding and gap from the modal
   * @type boolean
   * @default false
   * @example
   * <Modal :modelValue="true" :clearContent="true" />
   */
  clearContent?: boolean

  /**
   * Class of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal class="my-class" />
   */
  class?: string | string[]

  /**
   * Class of the overlay
   * @type string
   * @default ''
   * @example
   * <Modal overlayClass="my-class" />
   */
  overlayClass?: string | string[]

  /**
   * Style of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal style="color: red" />
   */
  style?: string

  /**
   * Control the scroll of the body
   * @type boolean
   * @default false
   * @example
   * <Modal :modelValue="true" :allowBodyScroll="true" />
   */
  allowBodyScroll?: boolean

  /**
   * ID of the modal for accessibility
   * @type string
   * @default generated unique id
   */
  id?: string

  /**
   * Label for the modal (for screen readers)
   * @type string
   * @default ''
   */
  ariaLabel?: string

  /**
   * Description for the modal (for screen readers)
   * @type string
   * @default ''
   */
  ariaDescription?: string
}
const props = withDefaults(defineProps<ModalProps>(), {
  modelValue: false,
  block: false,
  title: '',
  description: '',
  icon: '',
  width: '',
  height: '',
  outsideClick: false,
  clearContent: false,
  class: '',
  overlayClass: '',
  style: '',
  allowBodyScroll: false,
  id: undefined,
  ariaLabel: '',
  ariaDescription: '',
})
const emits = defineEmits(['update:modelValue'])
const classes = computed(() => {
  return {
    'r-dialog': true,
    'r-dialog--block': props.block,
    'p-0 gap-0': props.clearContent,
    [`${props.class}`]: true,
  }
})
const styles = computed(() => {
  return {
    width: props.width,
    height: props.height,
  }
})
function handleOutside(event: Event) {
  if (!props.outsideClick)
    return
  if (event.target === event.currentTarget)
    emits('update:modelValue', false)
}
// watchEffect(() => {
//   if (props.modelValue && !props.allowBodyScroll)
//     document.body.style.overflow = 'hidden'
//   else
//     document.body.style.overflow = 'auto'
// },
// { flush: 'post' },
// )

const modalId = ref(props.id || `modal-${Math.random().toString(36).substr(2, 9)}`)
const previousActiveElement = ref<HTMLElement | null>(null)

// Focus trap implementation
const firstFocusableElement = ref<HTMLElement | null>(null)
const lastFocusableElement = ref<HTMLElement | null>(null)

function updateFocusableElements() {
  const modal = document.getElementById(modalId.value)
  if (!modal)
    return

  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  )

  firstFocusableElement.value = focusableElements[0] as HTMLElement
  lastFocusableElement.value = focusableElements[focusableElements.length - 1] as HTMLElement
}

function handleTabKey(e: KeyboardEvent) {
  if (!props.modelValue)
    return

  if (!e.shiftKey && document.activeElement === lastFocusableElement.value) {
    e.preventDefault()
    firstFocusableElement.value?.focus()
  }

  if (e.shiftKey && document.activeElement === firstFocusableElement.value) {
    e.preventDefault()
    lastFocusableElement.value?.focus()
  }
}

// Keyboard event handlers
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.modelValue && props.outsideClick)
    emits('update:modelValue', false)

  if (event.key === 'Tab')
    handleTabKey(event)
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  if (!props.modelValue && props.allowBodyScroll)
    document.body.style.overflow = 'auto'
})

// Watch for modal state changes
watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    previousActiveElement.value = document.activeElement as HTMLElement
    nextTick(() => {
      updateFocusableElements()
      firstFocusableElement.value?.focus()
    })
    if (!props.allowBodyScroll)
      document.body.style.overflow = 'hidden'
  }
  else {
    previousActiveElement.value?.focus()
    document.body.style.overflow = 'auto'
  }
})
</script>

<template>
  <div
    v-show="modelValue"
    class="r-modal-overlay"
    :class="overlayClass"
    @click.stop="handleOutside"
  >
    <div
      :id="modalId"
      :aria-describedby="ariaDescription ? `${modalId}-desc` : undefined"
      :aria-label="ariaLabel || title"
      aria-modal="true"
      :class="classes"
      role="dialog"
      :style="styles"
      tabindex="-1"
    >
      <slot name="wrapper">
        <div class="r-dialog__header">
          <slot name="header" />
          <div v-if="props.icon" aria-hidden="true" class="icon">
            <Icon :name="props.icon" />
          </div>
          <div v-if="props.title" :id="`${modalId}-title`" class="title">
            {{ props.title }}
          </div>
          <div
            v-if="props.description"
            :id="`${modalId}-desc`"
            class="description"
          >
            {{ props.description }}
          </div>
        </div>
        <div class="r-dialog__body">
          <slot />
        </div>
        <div class="r-dialog__actions">
          <slot name="actions" />
        </div>
      </slot>
    </div>
  </div>
</template>
