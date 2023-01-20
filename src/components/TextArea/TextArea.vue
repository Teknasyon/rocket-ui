<script setup lang="ts">
import Label from '../Label/Label.vue';
import './textarea.css';
import {
  defineProps,
  defineEmits,
  reactive,
  watch,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
} from 'vue';
export interface IProps {
  /**
   * id of the textarea
   * @type HTMLAttributes['id']
   * @default ''
   * @example
   * <TextArea id="textarea" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   */
  id: HTMLAttributes['id'];

  /**
   * Input value
   * @type InputHTMLAttributes['value'];
   * @default ''
   * @example
   * <TextArea modelValue="Hello" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value
   */
  modelValue?: InputHTMLAttributes['value'];

  /**
   * label of the textarea
   * @type LabelHTMLAttributes['label']
   * @default ''
   * @example
   * <TextArea label="TextArea" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
   */
  label?: LabelHTMLAttributes['for'];

  /**
   * Placeholder text
   * @type InputHTMLAttributes['placeholder'];
   * @default ''
   * @example
   * <TextArea placeholder="Placeholder" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
   */
  placeholder?: InputHTMLAttributes['placeholder'];

  /**
   * Disabled state
   * @type InputHTMLAttributes['disabled'];
   * @default false
   * @example
   * <TextArea disabled />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled
   */
  disabled?: InputHTMLAttributes['disabled'];

  /**
   * Hint text
   * @type string
   * @default 'This is a hint'
   * @example
   * <TextArea hint="This is a hint" />
   */
  hint?: string;

  /**
   * Error message
   * @type string
   * @default ''
   * @example
   * <TextArea errorMsg="This is an error" />
   */
  errorMsg?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  id: '',
  errorMsg: '',
  disabled: false,
  placeholder: '',
  modelValue: '',
  label: '',
  hint: 'This is a hint',
});

const state = reactive({
  value: '',
});

const emit = defineEmits(['update:modelValue']);

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
}

watch(
  () => props.modelValue,
  (value) => {
    state.value = value;
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="container">
    <Label
      v-if="props.label"
      id="textarea"
      class="textarea__label"
      for="textarea"
      :text="props.label"
    />
    <textarea
      :id="props.id"
      class="textarea"
      :class="{
        'textarea--error': props.errorMsg,
        'textarea--disabled': props.disabled,
      }"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :value="state.value"
      @input="onInput"
    />
    <p v-if="props.errorMsg" class="textarea__error">
      {{ props.errorMsg }}
    </p>
    <p v-else class="textarea__hint">
      {{ props.hint }}
    </p>
  </div>
</template>
