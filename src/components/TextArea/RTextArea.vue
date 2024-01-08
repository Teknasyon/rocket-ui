<script setup lang="ts">
import './textarea.css'
import {
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  defineEmits,
  defineProps,
  reactive,
  watch,
} from 'vue'
import Label from '../Label/RLabel.vue'

export interface IProps {
  /**
   * id of the textarea
   * @type HTMLAttributes['id']
   * @default ''
   * @example
   * <TextArea id="textarea" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   */
  id: HTMLAttributes['id']

  /**
   * Input value
   * @type InputHTMLAttributes['value'];
   * @default ''
   * @example
   * <TextArea modelValue="Hello" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value
   */
  modelValue?: InputHTMLAttributes['value']

  /**
   * label of the textarea
   * @type LabelHTMLAttributes['label']
   * @default ''
   * @example
   * <TextArea label="TextArea" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
   */
  label?: LabelHTMLAttributes['for']

  /**
   * Placeholder text
   * @type InputHTMLAttributes['placeholder'];
   * @default ''
   * @example
   * <TextArea placeholder="Placeholder" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
   */
  placeholder?: InputHTMLAttributes['placeholder']

  /**
   * Disabled state
   * @type InputHTMLAttributes['disabled'];
   * @default false
   * @example
   * <TextArea disabled />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled
   */
  disabled?: InputHTMLAttributes['disabled']

  /**
   * Hint text
   * @type string
   * @default 'This is a hint'
   * @example
   * <TextArea hint="This is a hint" />
   */
  hint?: string

  /**
   * Error message
   * @type string
   * @default ''
   * @example
   * <TextArea errorMsg="This is an error" />
   */
  errorMsg?: string

  /**
   * Hide details
   * @type {boolean}
   * @default false
   * @example
   * <TextArea hideDetails />
   */
  hideDetails?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  id: '',
  errorMsg: '',
  disabled: false,
  placeholder: '',
  modelValue: '',
  label: '',
  hint: '',
})

const emit = defineEmits(['update:modelValue'])

const state = reactive({
  value: '',
})

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

watch(
  () => props.modelValue,
  (value) => {
    state.value = value
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="r-textarea-wrapper">
    <Label
      v-if="props.label"
      :id="`${props.id}-label`"
      class="r-textarea__label"
      for="textarea"
      :text="props.label"
    />
    <textarea
      :id="props.id"
      class="r-textarea"
      :class="{
        'r-textarea--error': props.errorMsg,
        'r-textarea--disabled': props.disabled,
      }"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :value="state.value"
      @input="onInput"
    />
    <div v-if="!props.hideDetails" class="r-textarea__details">
      <p v-if="props.errorMsg" class="r-textarea__error">
        {{ props.errorMsg }}
      </p>
      <p v-else class="r-textarea__hint">
        {{ props.hint }}
      </p>
    </div>
  </div>
</template>
