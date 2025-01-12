<script setup lang="ts">
import {
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  computed,
  reactive,
  ref,
  watch,
} from 'vue'
import './switch.css'

export interface Props {
  /**
   * id of the checkbox
   * @type {HTMLAttributes['id']}
   * @default ''
   * @example
   * <Checkbox id="checkbox" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   */
  id: HTMLAttributes['id']

  /**
   * Input checked state
   * @type boolean
   * @default false
   * @example
   * <Checkbox modelValue="true" />
   */
  modelValue?: boolean

  /**
   * Input disabled state
   * @type InputHTMLAttributes['disabled']
   * @default false
   * @example
   * <Checkbox disabled="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#disabled
   */
  disabled?: InputHTMLAttributes['disabled']

  /**
   * label of the checkbox
   * @type LabelHTMLAttributes['label']
   * @default ''
   * @example
   * <Checkbox label="Checkbox" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
   */
  label?: LabelHTMLAttributes['for']

  /**
   * Hint text
   * @type string
   * @default ''
   * @example
   * <Checkbox hint="This is a hint" />
   */
  hint?: string

  /**
   * Error message
   * @type string
   * @default ''
   * @example
   * <Checkbox errorMsg="This is an error" />
   */
  errorMsg?: string

  /**
   * Size of the checkbox
   * @type 'small' | 'medium' | 'large'
   * @default 'medium'
   * @example
   * <Checkbox size="small" />
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * Hide the hint and error message
   * @type {boolean}
   * @default false
   * @example
   * <Checkbox hideDetails />
   */
  hideDetails?: boolean

  /**
   * Reverse the order of the checkbox and the label
   * @type {boolean}
   * @default false
   * @example
   * <Checkbox reverse />
   */
  reverse?: boolean

  /**
   * Name of the checkbox
   * @type {string}
   * @default ''
   * @example
   * <Checkbox name="checkbox" />
   */
  name?: string

  /**
   * Whether the switch is required
   * @type boolean
   * @default false
   * @example
   * <Switch required />
   */
  required?: boolean

  /**
   * Aria label for the switch
   * @type string
   * @default ''
   * @example
   * <Switch aria-label="Enable notifications" />
   */
  ariaLabel?: string

  /**
   * Text to display when switch is on
   * @type string
   * @default ''
   * @example
   * <Switch onText="Enabled" />
   */
  onText?: string

  /**
   * Text to display when switch is off
   * @type string
   * @default ''
   * @example
   * <Switch offText="Disabled" />
   */
  offText?: string

  /**
   * ID of the element this switch controls
   * @type string
   * @default ''
   * @example
   * <Switch aria-controls="content-1" />
   */
  ariaControls?: string

  /**
   * Whether the controlled element is expanded
   * @type boolean
   * @default undefined
   * @example
   * <Switch :aria-expanded="isExpanded" />
   */
  ariaExpanded?: boolean

  /**
   * Whether to use aria-pressed instead of aria-checked
   * @type boolean
   * @default false
   * @example
   * <Switch use-pressed-state />
   */
  usePressedState?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  id: 'switch',
  modelValue: false,
  size: 'medium',
  disabled: false,
  label: '',
  hint: '',
  errorMsg: '',
  required: false,
  ariaLabel: '',
  onText: '',
  offText: '',
  ariaControls: '',
  ariaExpanded: undefined,
  usePressedState: false,
  hideDetails: false,
})
const emit = defineEmits(['update:modelValue'])
const checked = ref<boolean>(false)

const classes = computed(() => {
  return {
    'r-switch': true,
    'r-switch--disabled': props.disabled,
    [`r-switch--${props.size}`]: props.size,
    'r-switch--error': props.errorMsg,
  }
})

function onChange(e: Event) {
  if (props.disabled)
    return
  const target = e.target as HTMLInputElement
  checked.value = target.checked
  emit('update:modelValue', target.checked)
}

function onKeyDown(e: KeyboardEvent) {
  if (props.disabled)
    return

  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault()
    checked.value = !checked.value
    emit('update:modelValue', checked.value)
  }
  else if (e.key === 'Tab') {
    // Let the default tab behavior work
    return true
  }
}

watch(
  () => props.modelValue,
  (value) => {
    checked.value = value ?? false
  },
  {
    immediate: true,
    flush: 'sync', // Ensure immediate updates for testing
  },
)
</script>

<template>
  <div
    class="r-switch-container"
    :class="{
      'r-switch-container--reverse': reverse,
      'r-switch-container--hide-details': hideDetails,
    }"
  >
    <div :class="classes">
      <input
        :id="id"
        :aria-checked="!usePressedState ? (checked ? 'true' : 'false') : undefined"
        :aria-controls="ariaControls"
        :aria-describedby="errorMsg ? `${id}-error` : hint ? `${id}-hint` : undefined"
        :aria-disabled="disabled ? 'true' : undefined"
        :aria-expanded="ariaExpanded"
        :aria-invalid="errorMsg ? 'true' : undefined"
        :aria-label="ariaLabel || label"
        :aria-pressed="usePressedState ? (checked ? 'true' : 'false') : undefined"
        :aria-required="required ? 'true' : undefined"
        :checked="checked"
        class="r-switch__input"
        :disabled="disabled"
        :name="name"
        :required="required"
        role="switch"
        type="checkbox"
        @change="onChange"
        @keydown="onKeyDown"
      >
      <span
        aria-hidden="true"
        class="slider round"
      >
        <span v-if="onText || offText" class="sr-only">
          {{ checked ? onText : offText }}
        </span>
      </span>
    </div>
    <div
      class="r-switch-texts"
      :class="{
        [`r-switch-texts--${size}`]: true,
      }"
    >
      <label :id="`${id}-label`" class="r-switch-texts__label" :for="id">
        <span v-if="required" class="sr-only">Required -</span>
        {{ label }}
      </label>
      <div v-if="!hideDetails && (errorMsg || hint)" class="r-switch-texts__details">
        <p
          v-if="errorMsg"
          :id="`${id}-error`"
          class="r-switch-texts__error"
          role="alert"
        >
          {{ errorMsg }}
        </p>
        <p
          v-else-if="hint"
          :id="`${id}-hint`"
          class="r-switch-texts__hint"
        >
          {{ hint }}
        </p>
      </div>
    </div>
  </div>
</template>
