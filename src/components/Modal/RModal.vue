<script setup lang="ts">
import { computed, ref } from 'vue';
import './modal.css';
import Button from '../Button/RButton.vue';
import Icon from '../Icon/RIcon.vue';
import RTextfield, {
  type Props as TextfieldProps,
} from '../Textfield/RTextfield.vue';

export interface Field {
  name: string;
  label: string;
  type: TextfieldProps['type'];
  placeholder?: string;
  rules?: string;
}

export interface ModalProps {
  /**
   * Open the modal
   * @type boolean
   * @default false
   * @example
   * <Modal :open="true" />
   */
  open: boolean;
  /**
   * Block state of the Modal
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
   * Close text of the Modal
   * @type string
   * @default 'Close'
   * @example
   * <Modal closeText="Close" />
   */
  closeText?: string;
  /**
   * Submit text of the Modal
   * @type string
   * @default 'Submit'
   * @example
   * <Modal submitText="Submit" />
   */
  submitText?: string;
  /**
   * Hide close button of the Modal
   * @type boolean
   * @default false
   * @example
   * <Modal hideClose />
   */
  hideClose?: boolean;
  /**
   * Icon of the Modal
   * @type string
   * @default ''
   * @example
   * <Modal icon="mail" />
   */
  icon?: string;
  /**
   *
   */
  form?: {
    [key: string]: string;
  };
  fields?: Field[];
  /**
   * Click outside the modal
   * @type Event
   * @example
   * <Modal @click:outside="handleClickOutside" />
   */
  'click:outside'?: Event;
  /**
   * Submit the modal
   * @type Event
   * @example
   * <Modal @submit="handleSubmit" />
   */
  submit?: Event;
}
const props = withDefaults(defineProps<ModalProps>(), {
  open: false,
  block: false,
  title: '',
  description: '',
  closeText: 'Close',
  submitText: 'Submit',
});
const classes = computed(() => {
  return {
    dialog: true,
    'dialog--block': props.block,
  };
});
</script>
<template>
  <div class="modal" v-show="open" @click.stop="$emit('click:outside')">
    <div role="dialog" aria-modal="true" :class="classes" :open="props.open">
      <div class="dialog__header">
        <div class="icon" v-if="props.icon">
          <Icon :name="props.icon" kind="outlined" />
        </div>
        <div class="title" v-if="props.title">
          {{ props.title }}
        </div>
        <div class="description" v-if="props.description">
          {{ props.description }}
        </div>
      </div>
      <div class="dialog__body">
        <slot />
        <form v-if="props.form">
          <div v-for="field in props.fields" :key="field.name">
            <RTextfield
              v-model="props.form[field.name]"
              :label="field.label"
              :type="field.type"
              :name="field.name"
              :placeholder="field.placeholder"
              :rules="field.rules"
            />
          </div>
        </form>
      </div>
      <div class="dialog__footer">
        <slot name="footer" />

        <Button variant="secondary" block>{{ props.closeText }}</Button>
        <Button variant="primary" block @click="$emit('submit', props.form)">{{
          props.submitText
        }}</Button>
      </div>
    </div>
  </div>
</template>
