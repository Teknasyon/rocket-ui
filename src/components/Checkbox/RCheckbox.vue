<script setup lang="ts">
import './checkbox.css'
import {
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  computed,
  reactive,
  watch,
} from 'vue'

import Icon from '../Icon/RIcon.vue'

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
   * @type {InputHTMLAttributes['checked']}
   * @default false
   * @example
   * <Checkbox :modelValue="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#checked
   */
  modelValue?: InputHTMLAttributes['checked']

  /**
   * label of the checkbox
   * @type {LabelHTMLAttributes['label']}
   * @default ''
   * @example
   * <Checkbox label="Checkbox" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
   */
  label?: LabelHTMLAttributes['for']

  /**
   * Input indeterminate state
   * @type {InputHTMLAttributes['indeterminate']}
   * @default false
   * @example
   * <Checkbox indeterminate="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate
   */
  indeterminate?: InputHTMLAttributes['indeterminate']

  /**
   * Input disabled state
   * @type {InputHTMLAttributes['disabled']}
   * @default false
   * @example
   * <Checkbox disabled="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#disabled
   */
  disabled?: InputHTMLAttributes['disabled']

  /**
   * Hint text
   * @type {string}
   * @default ''
   * @example
   * <Checkbox hint="This is a hint" />
   */
  hint?: string

  /**
   * Error message
   * @type {string}
   * @default ''
   * @example
   * <Checkbox errorMsg="This is an error" />
   */
  errorMsg?: string

  /**
   * Hide the hint and error message
   * @type {boolean}
   * @default false
   * @example
   * <Checkbox hideDetails />
   */
  hideDetails?: boolean

  /**
   * Whether the checkbox is required
   * @type boolean
   * @default false
   * @example
   * <Checkbox required />
   */
  required?: boolean

  /**
   * Aria label for the checkbox
   * @type string
   * @default ''
   * @example
   * <Checkbox aria-label="Accept terms" />
   */
  ariaLabel?: string

  /**
   * Name attribute for the checkbox
   * @type string
   * @default ''
   * @example
   * <Checkbox name="terms" />
   */
  name?: string

  /**
   * Value attribute for the checkbox
   * @type string | number | boolean
   * @default ''
   * @example
   * <Checkbox value="1" />
   */
  value?: string | number | boolean
}

interface StateTypes {
  checked: InputHTMLAttributes['checked']
  indeterminate: InputHTMLAttributes['indeterminate']
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  label: '',
  indeterminate: false,
  disabled: false,
  hint: '',
  errorMsg: '',
  modelValue: false,
  required: false,
  ariaLabel: '',
  name: '',
  value: '',
})

const emit = defineEmits(['update:modelValue'])

const state = reactive<StateTypes>({
  checked: false,
  indeterminate: false,
})

const icons = {
  checked: 'mdiCheck',
  unchecked: '',
  indeterminate: 'mdiMinus',
}

const icon = computed(() => {
  if (state.indeterminate)
    return icons.indeterminate

  return state.checked ? icons.checked : icons.unchecked
})

const classes = computed(() => {
  return {
    'r-checkbox': true,
    'r-checkbox--checked': state.checked,
    'r-checkbox--disabled': props.disabled,
    'r-checkbox--indeterminate': state.indeterminate,
    'r-checkbox--error': !!props.errorMsg,
  }
})

function onChange(e: unknown) {
  if (props.disabled)
    return
  // @ts-expect-error: Unreachable code error
  state.checked = e.target.checked
  state.indeterminate = false
  emit('update:modelValue', state.checked)
}

watch(
  () => props.indeterminate,
  (value) => {
    state.indeterminate = value
    if (value === true) {
      state.checked = false
      emit('update:modelValue', state.checked)
    }
  },
  {
    // need immediate to set the state on first render for storybook
    // TODO: find a better way to do this
    immediate: true,
  },
)
watch(
  () => props.modelValue,
  (value) => {
    state.checked = value
  },
  {
    // need immediate to set the state on first render for storybook
    // TODO: find a better way to do this
    immediate: true,
  },
)

const checkboxId = computed(() => props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`)
</script>

<template>
  <div class="r-checkbox-wrapper">
    <div class="r-checkbox-container">
      <input
        :id="checkboxId"
        :aria-checked="state.indeterminate ? 'mixed' : undefined"
        :aria-describedby="props.errorMsg ? `${checkboxId}-error` : props.hint ? `${checkboxId}-hint` : undefined"
        :aria-disabled="props.disabled"
        :aria-invalid="!!props.errorMsg"
        :aria-label="props.ariaLabel || props.label"
        :aria-required="props.required"
        :checked="state.checked"
        class="r-checkbox-container__input"
        :disabled="props.disabled"
        :indeterminate="state.indeterminate"
        :name="name"
        :required="required"
        type="checkbox"
        :value="value"
        @change="onChange"
        @keydown.space.prevent="onChange"
      >
      <div
        aria-hidden="true"
        :class="classes"
        :data-disabled="props.disabled"
      >
        <Icon :name="icon" :size="24" />
      </div>
    </div>
    <div class="r-checkbox-texts">
      <label
        class="r-checkbox-texts__label"
        :data-disabled="props.disabled"
        :for="checkboxId"
      >
        <span v-if="required" class="sr-only">Required - </span>
        {{ label }}
      </label>
      <div v-if="!hideDetails && (errorMsg || hint)" class="r-checkbox-texts__details">
        <p
          v-if="!!errorMsg"
          :id="`${checkboxId}-error`"
          class="r-checkbox-texts__error"
          role="alert"
        >
          {{ errorMsg }}
        </p>
        <p
          v-else-if="hint"
          :id="`${checkboxId}-hint`"
          class="r-checkbox-texts__hint"
        >
          {{ hint }}
        </p>
      </div>
    </div>
  </div>
</template>
