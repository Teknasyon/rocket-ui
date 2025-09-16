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
   * @type InputHTMLAttributes['checked']
   * @default false
   * @example
   * <Checkbox modelValue="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#checked
   */
  modelValue?: InputHTMLAttributes['checked']

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
}
const props = withDefaults(defineProps<Props>(), {
  id: 'switch',
  modelValue: false,
  size: 'medium',
  disabled: false,
  label: '',
  hint: '',
  errorMsg: '',
})
const emit = defineEmits(['update:modelValue'])
const state = ref<{
  checked: InputHTMLAttributes['checked']
}>({
  checked: false,
})
const classes = computed(() => {
  return {
    'r-switch': true,
    'r-switch--disabled': props.disabled,
    [`r-switch--${props.size}`]: props.size,
    'r-switch--error': props.errorMsg,
  }
})
const componentId = computed(() => {
  return props.id || 'r-switch'
})
function onChange(e: unknown) {
  if (props.disabled)
    return
  // @ts-expect-error: Unreachable code error
  state.value.checked = e.target.checked
  emit('update:modelValue', state.value.checked)
}
watch(
  () => props.modelValue,
  (value) => {
    state.value.checked = value
  },
  {
    // need immediate to set the state on first render for storybook
    // TODO: find a better way to do this
    immediate: true,
  },
)
</script>

<template>
  <div
    :id="componentId"
    class="r-switch-container"
    :class="{
      'r-switch-container--reverse': props.reverse,
      'r-switch-container--hide-details': props.hideDetails,
    }"
  >
    <div :class="classes">
      <input
        :id="`${componentId}`"
        :checked="state.checked"
        class="r-switch__input"
        :disabled="props.disabled"
        :name="props.name"
        type="checkbox"
        @change="onChange"
      >
      <span class="slider round" />
    </div>
    <div
      class="r-switch-texts"
      :class="{
        [`r-switch-texts--${props.size}`]: true,
      }"
    >
      <label :id="`${componentId}`" class="r-switch-texts__label" :for="componentId">
        {{ props.label }}
      </label>
      <div v-if="!props.hideDetails" :id="`${componentId}-details`" class="r-switch-texts__details">
        <p v-if="props.errorMsg" :id="`${componentId}-error`" class="r-switch-texts__error">
          {{ props.errorMsg }}
        </p>
        <p v-else :id="`${componentId}-hint`" class="r-switch-texts__hint">
          {{ props.hint }}
        </p>
      </div>
    </div>
  </div>
</template>
