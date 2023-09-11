<script setup lang="ts">
import { computed } from 'vue';
import './modal.css';
import Icon from '../Icon/RIcon.vue';

export interface ModalProps {
  /**
   * modelValue the modal
   * @type boolean
   * @default false
   * @example
   * <Modal :modelValue="true" />
   */
  modelValue: boolean;
  /**
   * Modal width is 100%
   * @type boolean
   * @default false
   * @example
   * <Modal block />
   */
  block?: boolean;
  /**
   * Title of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal title="Modal Title" />
   */
  title?: string;
  /**
   * Description of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal description="Modal Description" />
   */
  description?: string;
  /**
   * Icon of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal icon="mdiMail" />
   */
  icon?: string;

  /**
   * Width of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal width="500px" />
   */
  width?: string;

  /**
   * Height of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal height="500px" />
   */
  height?: string;

  /**
   * Close the modal when clicking outside
   * @type boolean
   * @default false
   * @example
   * <Modal :modelValue="true" :outsideClick="true" />
   */
  outsideClick?: boolean;
}
const props = withDefaults(defineProps<ModalProps>(), {
  modelValue: false,
  block: false,
  title: '',
  description: '',
});
const emits = defineEmits(['update:modelValue']);
const classes = computed(() => {
  return {
    dialog: true,
    'dialog--block': props.block,
  };
});
const styles = computed(() => {
  return {
    width: props.width,
    height: props.height,
  };
});
const handleOutside = (event: Event) => {
  if (!props.outsideClick) return;
  if (event.target === event.currentTarget) {
    emits('update:modelValue', false);
  }
};
</script>
<template>
  <div v-show="modelValue" class="modal" @click.stop="handleOutside">
    <div
      aria-modal="true"
      :class="classes"
      :open="props.modelValue"
      role="dialog"
      :style="styles"
    >
      <div class="dialog__header">
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
      <div class="dialog__body">
        <slot />
      </div>
      <div class="dialog__actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
