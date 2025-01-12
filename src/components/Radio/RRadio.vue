<script setup lang="ts">
import { computed } from 'vue'
import './radio.css'

export interface Props {
  /**
   * ID of the radio button
   * @type string
   * @default ''
   */
  id?: string

  /**
   * Value of the radio button
   * @type any
   * @required
   */
  value: any

  /**
   * Model value for v-model binding
   * @type any
   */
  modelValue?: any

  /**
   * Label for the radio button
   * @type string
   * @default ''
   */
  label?: string

  /**
   * Whether the radio button is disabled
   * @type boolean
   * @default false
   */
  disabled?: boolean

  /**
   * Whether the radio button is required
   * @type boolean
   * @default false
   */
  required?: boolean

  /**
   * Name attribute for the radio button
   * @type string
   * @default ''
   */
  name?: string

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
   * Hide details (error and hint messages)
   * @type boolean
   * @default false
   */
  hideDetails?: boolean

  /**
   * Aria label for the radio button
   * @type string
   * @default ''
   */
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  modelValue: undefined,
  label: '',
  disabled: false,
  required: false,
  name: '',
  errorMsg: '',
  hint: '',
  hideDetails: false,
  ariaLabel: '',
})

const emit = defineEmits(['update:modelValue'])

const radioId = computed(() => props.id || `radio-${Math.random().toString(36).substr(2, 9)}`)

const isChecked = computed(() => props.modelValue === props.value)

const classes = computed(() => ({
  'r-radio': true,
  'r-radio--checked': isChecked.value,
  'r-radio--disabled': props.disabled,
  'r-radio--error': !!props.errorMsg,
}))

function onChange() {
  if (props.disabled)
    return
  emit('update:modelValue', props.value)
}
</script>

<template>
  <div class="r-radio-wrapper">
    <div class="r-radio-container">
      <input
        :id="radioId"
        :aria-describedby="errorMsg ? `${radioId}-error` : hint ? `${radioId}-hint` : undefined"
        :aria-disabled="disabled"
        :aria-invalid="!!errorMsg"
        :aria-label="ariaLabel || label"
        :aria-required="required"
        :checked="isChecked"
        class="r-radio-container__input"
        :disabled="disabled"
        :name="name"
        :required="required"
        type="radio"
        :value="value"
        @change="onChange"
      >
      <div
        aria-hidden="true"
        :class="classes"
        :data-disabled="disabled"
      >
        <div class="r-radio__inner" />
      </div>
    </div>
    <div class="r-radio-texts">
      <label
        class="r-radio-texts__label"
        :data-disabled="disabled"
        :for="radioId"
      >
        <span v-if="required" class="sr-only">Required - </span>
        {{ label }}
      </label>
      <div v-if="!hideDetails && (errorMsg || hint)" class="r-radio-texts__details">
        <p
          v-if="errorMsg"
          :id="`${radioId}-error`"
          class="r-radio-texts__error"
          role="alert"
        >
          {{ errorMsg }}
        </p>
        <p
          v-else-if="hint"
          :id="`${radioId}-hint`"
          class="r-radio-texts__hint"
        >
          {{ hint }}
        </p>
      </div>
    </div>
  </div>
</template>
