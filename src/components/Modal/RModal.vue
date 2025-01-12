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
const titleId = ref(`${modalId.value}-title`)
const descriptionId = ref(`${modalId.value}-description`)
const previousActiveElement = ref<HTMLElement | null>(null)

// Focus trap implementation
const modalRef = ref<HTMLElement | null>(null)
const firstFocusableElement = ref<HTMLElement | null>(null)
const lastFocusableElement = ref<HTMLElement | null>(null)

interface AriaAttributes {
  role: 'dialog'
  'aria-modal': 'true'
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-label'?: string
}

const ariaAttributes = computed<AriaAttributes>(() => ({
  'role': 'dialog',
  'aria-modal': 'true',
  'aria-labelledby': props.title ? titleId.value : undefined,
  'aria-describedby': props.description ? descriptionId.value : undefined,
  'aria-label': !props.title ? props.ariaLabel : undefined,
}))

function updateFocusableElements() {
  if (!modalRef.value)
    return

  const focusableElements = modalRef.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  )

  firstFocusableElement.value = focusableElements[0] as HTMLElement
  lastFocusableElement.value = focusableElements[focusableElements.length - 1] as HTMLElement
}

function handleTabKey(e: KeyboardEvent) {
  if (!props.modelValue || !firstFocusableElement.value || !lastFocusableElement.value)
    return

  const isTabPressed = e.key === 'Tab'

  if (!isTabPressed)
    return

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement.value) {
      e.preventDefault()
      lastFocusableElement.value.focus()
    }
  }
  else {
    if (document.activeElement === lastFocusableElement.value) {
      e.preventDefault()
      firstFocusableElement.value.focus()
    }
  }
}

function handleEscapeKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue && props.outsideClick) {
    e.preventDefault()
    emits('update:modelValue', false)
  }
}

function handleKeyDown(e: KeyboardEvent) {
  handleTabKey(e)
  handleEscapeKey(e)
}

// Add MutationObserver to watch for content changes
const observer = ref<MutationObserver | null>(null)

watch(() => props.modelValue, async (isOpen) => {
  if (isOpen) {
    previousActiveElement.value = document.activeElement as HTMLElement
    document.body.style.overflow = props.allowBodyScroll ? 'auto' : 'hidden'

    await nextTick()
    updateFocusableElements()
    firstFocusableElement.value?.focus()

    // Set up observer for content changes
    if (modalRef.value && !observer.value) {
      observer.value = new MutationObserver(() => {
        nextTick(() => {
          updateFocusableElements()
        })
      })
      observer.value.observe(modalRef.value, {
        childList: true,
        subtree: true,
      })
    }

    // Announce modal opening to screen readers
    const announcement = document.createElement('div')
    announcement.setAttribute('role', 'status')
    announcement.setAttribute('aria-live', 'polite')
    announcement.textContent = `Dialog ${props.title || ''} opened`
    document.body.appendChild(announcement)
    setTimeout(() => announcement.remove(), 1000)
  }
  else {
    document.body.style.overflow = 'auto'
    previousActiveElement.value?.focus()

    // Announce modal closing to screen readers
    const announcement = document.createElement('div')
    announcement.setAttribute('role', 'status')
    announcement.setAttribute('aria-live', 'polite')
    announcement.textContent = `Dialog ${props.title || ''} closed`
    document.body.appendChild(announcement)
    setTimeout(() => announcement.remove(), 1000)
  }
})

onMounted(() => {
  if (props.modelValue) {
    nextTick(() => {
      updateFocusableElements()
      firstFocusableElement.value?.focus()
    })
  }
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
  observer.value?.disconnect()
})
</script>

<template>
  <Teleport to="body">
    <transition name="modal">
      <div
        v-if="modelValue"
        :id="modalId"
        ref="modalRef"
        class="r-modal-overlay"
        :class="[`${overlayClass}`]"
        v-bind="ariaAttributes"
        tabindex="-1"
        @click="handleOutside"
        @keydown="handleKeyDown"
      >
        <div
          :class="classes"
          role="document"
          :style="styles"
        >
          <div v-if="!clearContent" class="r-dialog__header">
            <div class="r-dialog__header-content">
              <Icon
                v-if="icon"
                aria-hidden="true"
                class="r-dialog__icon"
                :name="icon"
              />
              <div class="r-dialog__texts">
                <h2
                  v-if="title"
                  :id="titleId"
                  class="r-dialog__title"
                >
                  {{ title }}
                </h2>
                <p
                  v-if="description"
                  :id="descriptionId"
                  class="r-dialog__description"
                >
                  {{ description }}
                </p>
              </div>
            </div>
            <button
              v-if="outsideClick"
              aria-label="Close dialog"
              class="r-dialog__close"
              @click="$emit('update:modelValue', false)"
            >
              <Icon aria-hidden="true" name="mdiClose" />
            </button>
          </div>
          <div
            class="r-dialog__body"
            :class="{
              'r-dialog__body--clear': clearContent,
            }"
          >
            <slot />
          </div>
          <div
            v-if="!clearContent && $slots.actions"
            class="r-dialog__actions"
          >
            <slot name="actions" />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
