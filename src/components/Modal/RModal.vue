<script setup lang="ts">
import { computed, watchEffect } from 'vue'
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
  class: '',
  overlayClass: '',
  style: '',
  allowBodyScroll: false,
})
const emits = defineEmits(['update:modelValue'])
const classes = computed(() => {
  return {
    'r-dialog': true,
    'r-dialog--block': props.block,
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
watchEffect(() => {
  if (props.modelValue && !props.allowBodyScroll)
    document.body.style.overflow = 'hidden'
  else
    document.body.style.overflow = 'auto'
})

// close on escape
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && props.modelValue && props.outsideClick)
    emits('update:modelValue', false)
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
      aria-modal="true"
      :class="classes"
      :open="props.modelValue"
      role="dialog"
      :style="styles"
    >
      <div class="r-dialog__header">
        <slot name="header" />
        <div v-if="props.icon" class="icon">
          <Icon :name="props.icon" />
        </div>
        <div v-if="props.title" class="title">
          {{ props.title }}
        </div>
        <div v-if="props.description" class="description">
          {{ props.description }}
        </div>
      </div>
      <div class="r-dialog__body">
        <slot />
      </div>
      <div class="r-dialog__actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
