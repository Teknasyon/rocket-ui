<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import './textarea.css'
import Label from '../Label/RLabel.vue'
import Icon from '../Icon/RIcon.vue'

export interface Props {
  /**
   * ID of the textarea
   * @type string
   * @default ''
   */
  id?: string

  /**
   * Model value for v-model binding
   * @type string
   */
  modelValue?: string

  /**
   * Label for the textarea
   * @type string
   * @default ''
   */
  label?: string

  /**
   * Placeholder text
   * @type string
   * @default ''
   */
  placeholder?: string

  /**
   * Error message
   * @type string
   * @default ''
   */
  errorMsg?: string

  /**
   * Hint text
   * @type string
   * @default ''
   */
  hint?: string

  /**
   * Whether the textarea is disabled
   * @type boolean
   * @default false
   */
  disabled?: boolean

  /**
   * Whether the textarea is readonly
   * @type boolean
   * @default false
   */
  readonly?: boolean

  /**
   * Whether the textarea is required
   * @type boolean
   * @default false
   */
  required?: boolean

  /**
   * Name attribute for the textarea
   * @type string
   * @default ''
   */
  name?: string

  /**
   * Maximum length of the textarea
   * @type number
   */
  maxLength?: number

  /**
   * Minimum length of the textarea
   * @type number
   */
  minLength?: number

  /**
   * Number of rows
   * @type number
   * @default 3
   */
  rows?: number

  /**
   * Whether to auto resize the textarea
   * @type boolean
   * @default false
   */
  autoResize?: boolean

  /**
   * Hide details (error and hint messages)
   * @type boolean
   * @default false
   */
  hideDetails?: boolean

  /**
   * Aria label for the textarea
   * @type string
   * @default ''
   */
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  modelValue: '',
  label: '',
  placeholder: '',
  errorMsg: '',
  hint: '',
  disabled: false,
  readonly: false,
  required: false,
  name: '',
  rows: 3,
  autoResize: false,
  hideDetails: false,
  ariaLabel: '',
})

const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur'])

const textareaRef = ref<HTMLTextAreaElement>()
const isFocused = ref(false)
const textareaValue = ref(props.modelValue)

const hasErrorMsg = computed(() => !!props.errorMsg)

const classes = computed(() => ({
  'r-textarea': true,
  'r-textarea--focused': isFocused.value,
  'r-textarea--disabled': props.disabled,
  'r-textarea--readonly': props.readonly,
  'r-textarea--error': hasErrorMsg.value,
  'r-textarea--auto-resize': props.autoResize,
}))

function onInput(e: Event) {
  const target = e.target as HTMLTextAreaElement
  textareaValue.value = target.value
  emit('input', e)
  if (props.autoResize)
    autoResize()
}

function onFocus(e: FocusEvent) {
  isFocused.value = true
  emit('focus', e)
}

function onBlur(e: FocusEvent) {
  isFocused.value = false
  emit('blur', e)
}

function autoResize() {
  if (!textareaRef.value)
    return

  textareaRef.value.style.height = 'auto'
  textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
}

watch(() => props.modelValue, (value) => {
  textareaValue.value = value
  if (props.autoResize)
    autoResize()
})

watch(() => textareaValue.value, (value) => {
  emit('update:modelValue', value)
})
</script>

<template>
  <div class="r-textarea-wrapper">
    <Label
      v-if="label"
      :id="`${props.id}-label`"
      class="r-textarea__label"
      :for="props.id"
      :text="label"
    />
    <div class="r-textarea-container">
      <textarea
        :id="props.id"
        ref="textareaRef"
        v-model="textareaValue"
        :aria-describedby="hasErrorMsg ? `${props.id}-error` : hint ? `${props.id}-hint` : undefined"
        :aria-disabled="disabled"
        :aria-invalid="hasErrorMsg"
        :aria-label="ariaLabel || label"
        :aria-readonly="readonly"
        :aria-required="required"
        :class="classes"
        :disabled="disabled"
        :maxlength="maxLength"
        :minlength="minLength"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :required="required"
        :rows="rows"
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
      />
    </div>
    <div v-if="!hideDetails && (errorMsg || hint)" class="r-textarea__details">
      <p
        v-if="errorMsg"
        :id="`${props.id}-error`"
        class="r-textarea__error"
        role="alert"
      >
        {{ errorMsg }}
      </p>
      <p
        v-else-if="hint"
        :id="`${props.id}-hint`"
        class="r-textarea__hint"
      >
        {{ hint }}
      </p>
    </div>
  </div>
</template>
