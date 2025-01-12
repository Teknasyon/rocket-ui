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
import './textfield.css'
import Icon from '../Icon/RIcon.vue'
import Label from '../Label/RLabel.vue'

// import { vFocus } from '../../directives';
export interface Props {
  /**
   * id of the textfield
   * @type HTMLAttributes['id']
   * @default ''
   * @example
   * <Textfield id="textfield" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   */
  id: HTMLAttributes['id']
  /**
   * Input type
   * @type 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
   * @default 'text'
   * @example
   * <Textfield type="password" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
   */
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'

  /**
   * Input value
   * @type InputHTMLAttributes['value'];
   * @default ''
   * @example
   * <Textfield modelValue="Hello" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value
   */
  modelValue?: InputHTMLAttributes['value']

  /**
   * label of the textfield
   * @type LabelHTMLAttributes['label']
   * @default ''
   * @example
   * <Textfield label="Textfield" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
   */
  label?: LabelHTMLAttributes['for']

  /**
   * Placeholder text
   * @type InputHTMLAttributes['placeholder'];
   * @default ''
   * @example
   * <Textfield placeholder="Placeholder" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
   */
  placeholder?: InputHTMLAttributes['placeholder']

  /**
   * Error message
   * @type string
   * @default ''
   * @example
   * <Textfield errorMsg="This is an error" />
   */
  errorMsg?: string

  /**
   * Hint text
   * @type string
   * @default ''
   * @example
   * <Textfield hint="This is a hint" />
   */
  hint?: string

  /**
   * Icon to prepend
   * @type string
   * @default ''
   * @example
   * <Textfield prependIcon="mdiLock" />
   */
  prependIcon?: string

  /**
   * Icon to append
   * @type string
   * @default ''
   * @example
   * <Textfield appendIcon="mdiEyeOffOutline" />
   */
  appendIcon?: string

  /**
   * Input disabled state
   * @type InputHTMLAttributes['disabled'] | boolean
   * @default false
   * @example
   * <Textfield disabled="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled
   */
  disabled?: boolean

  /**
   * Input loading state
   * @type boolean
   * @default false
   * @example
   * <Textfield loading="true" />
   */
  loading?: boolean

  /**
   * Input clearable state
   * @type boolean
   * @default false
   * @example
   * <Textfield clearable="true" />
   */
  clearable?: boolean

  /**
   * Input number min value
   * @type InputHTMLAttributes['min']
   * @default ''
   * @example
   * <Textfield min="0" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
   */
  min?: InputHTMLAttributes['min']

  /**
   * Input number max value
   * @type InputHTMLAttributes['max']
   * @default ''
   * @example
   * <Textfield max="10" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
   */
  max?: InputHTMLAttributes['max']

  /**
   * Hide details state of textfield details
   * @type {boolean}
   * @default false
   * @example
   * <Textfield hideDetails />
   */
  hideDetails?: boolean

  /**
   * Input role
   * @type {string}
   * @default ''
   * @example
   * <Textfield role="search" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#role
   */
  role?: string

  /**
   * Input readonly state
   * @type {boolean}
   * @default false
   * @example
   * <Textfield readonly />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
   */
  readonly?: boolean

  /**
   * Aria label for the input
   * @type string
   * @default ''
   * @example
   * <Textfield aria-label="Search" />
   */
  ariaLabel?: string

  /**
   * Whether the input is required
   * @type boolean
   * @default false
   * @example
   * <Textfield required />
   */
  required?: boolean

  /**
   * Input autocomplete attribute
   * @type string
   * @default 'off'
   * @example
   * <Textfield autocomplete="email" />
   */
  autocomplete?: string

  /**
   * Input name attribute
   * @type string
   * @default ''
   * @example
   * <Textfield name="email" />
   */
  name?: string
}
const props = withDefaults(defineProps<Props>(), {
  id: '',
  type: 'text',
  modelValue: '',
  label: '',
  placeholder: '',
  errorMsg: '',
  hint: '',
  prependIcon: '',
  appendIcon: '',
  iconColor: '',
  disabled: false,
  loading: false,
  clearable: false,
  hideDetails: false,
  role: '',
  readonly: false,
  ariaLabel: '',
  required: false,
  autocomplete: 'off',
  name: '',
})
const emit = defineEmits([
  'update:modelValue',
  'focus',
  'blur',
  'input',
  'click:icon',
  'click:clear',
])
const inputRef = ref<HTMLInputElement>()
const state = reactive({
  value: '',
})
const typeOfInputRef = ref(props.type)
const prependIconsOfType = {
  password: 'mdiLock',
  email: 'mdiEmailOutline',
  tel: 'mdiPhone',
  url: 'mdiLink',
  number: 'mdiNumeric',
  text: '',
}
const isFocused = ref(false)
const isFilled = computed(() => !!state.value)
const hasValue = computed(() => {
  return state.value.length > 0
})
const hasErrorMsg = computed(() => {
  return !!props.errorMsg
})
const hasClear = computed(() => {
  return props.clearable && hasValue.value
})
const classes = computed(() => {
  const { disabled, loading } = props
  return {
    'r-textfield': true,
    'r-textfield--error': hasErrorMsg.value,
    'r-textfield--loading': loading,
    'r-textfield--disabled': disabled,
    'r-textfield--clearable': hasClear.value,
    'r-textfield--focus': isFocused.value,
    'r-textfield--filled': isFilled.value,
  }
})
const prependIconClasses = computed(() => {
  return {
    'r-textfield__prepend-icon': true,
    'r-textfield__prepend-icon--loading': props.loading,
    'r-textfield__prepend-icon--error': hasErrorMsg.value && isFilled.value,
  }
})
const appendIconClasses = computed(() => {
  return {
    'r-textfield__append-icon': true,
    'r-textfield__append-icon--clear': hasClear.value,
    'r-textfield__append-icon--error': hasErrorMsg.value,
  }
})

const prependIconName = computed(() => {
  const { prependIcon, type } = props
  if (prependIcon === 'none')
    return ''
  if (prependIcon)
    return prependIcon
  return prependIconsOfType[type]
})

const appendIconName = computed(() => {
  const { appendIcon, type } = props
  if (appendIcon === 'none')
    return ''
  if (hasErrorMsg.value)
    return 'mdiAlertCircleOutline'
  if (hasClear.value && ['text', 'email'].includes(type))
    return 'mdiClose'
  if (type === 'password' && typeOfInputRef.value === 'password')
    return 'mdiEyeOutline'
  if (type === 'password' && typeOfInputRef.value === 'text')
    return 'mdiEyeOffOutline'
  return appendIcon
})
/**
 * @description - focus event handler
 * @param {FocusEvent} e - FocusEvent object
 * @returns {void}
 */
function onFocus(e: FocusEvent) {
  isFocused.value = true
  emit('focus', e)
}
/**
 * @description - blur event handler
 * @param {FocusEvent} e - FocusEvent object
 * @returns {void}
 */
function onBlur(e: FocusEvent) {
  isFocused.value = false
  emit('blur', e)
}
/**
 * @description - Emit input event with value of input
 * @param {InputEvent} e - InputEvent object
 * @returns {void}
 */
function onInput(e: InputEvent): void {
  state.value = (e.target as HTMLInputElement).value
  emit('input', e)
}
/**
 * @description - Emit click event with value of append icon
 * @returns {void}
 */
function clickIcon(): void {
  if (hasClear.value) {
    state.value = ''
    inputRef.value?.focus()
    emit('click:clear', {
      value: typeOfInputRef.value === 'number' ? +state.value : state.value,
    })
    return
  }
  emit('click:icon', {
    value: typeOfInputRef.value === 'number' ? +state.value : state.value,
  })
  if (props.type === 'password')
    setPassType()
}
/**
 * @description - Set type of input to password or text
 * @returns {void}
 */
function setPassType(): void {
  typeOfInputRef.value
    = typeOfInputRef.value === 'password' ? 'text' : 'password'
}

function focusInput() {
  inputRef.value?.focus()
}

watch(
  () => props.type,
  (value) => {
    typeOfInputRef.value = value
  },
  {
    immediate: true,
  },
)

watch(
  () => props.modelValue,
  (value) => {
    state.value = value
  },
  {
    immediate: true,
  },
)

watch(
  () => state.value,
  (value) => {
    emit(
      'update:modelValue',
      typeOfInputRef.value === 'number' ? +value : value,
    )
  },
)
</script>

<template>
  <div class="r-textfield__wrapper">
    <Label
      v-if="label"
      :id="`${props.id}-label`"
      class="r-textfield__label"
      :for="props.id"
      :text="label"
      @click="focusInput"
    />
    <div class="input-wrapper">
      <div :class="classes">
        <slot
          :disabled="disabled"
          :error="hasErrorMsg"
          :loading="loading"
          name="prepend"
        >
          <Icon
            v-if="prependIconName"
            aria-hidden="true"
            :class="prependIconClasses"
            :name="prependIconName"
            :size="20"
          />
        </slot>
        <input
          :id="props.id"
          ref="inputRef"
          :aria-describedby="hasErrorMsg ? `${props.id}-error` : hint ? `${props.id}-hint` : undefined"
          :aria-disabled="disabled"
          :aria-invalid="hasErrorMsg || undefined"
          :aria-label="ariaLabel || label"
          :aria-readonly="readonly"
          :aria-required="required"
          :disabled="disabled"
          :max="max"
          :min="min"
          :name="name"
          :placeholder="placeholder"
          :readonly="readonly"
          :required="required"
          :type="typeOfInputRef"
          :value="state.value"
          @blur="onBlur"
          @focus="onFocus"
          @input="onInput"
        >
        <slot
          :disabled="disabled"
          :error="hasErrorMsg"
          :loading="loading"
          name="append"
        >
          <Icon
            v-if="type === 'password'"
            aria-hidden="true"
            :name="typeOfInputRef === 'password' ? 'mdiEyeOutline' : 'mdiEyeOffOutline'"
            :size="20"
            @click="clickIcon"
          />
          <Icon
            v-else-if="(appendIconName && !$slots.append) || hasErrorMsg"
            aria-hidden="true"
            :class="appendIconClasses"
            :name="appendIconName"
            :size="20"
            @click="clickIcon"
          />
        </slot>
      </div>
      <div v-if="!hideDetails && (errorMsg || hint)" class="r-textfield__details">
        <p
          v-if="errorMsg"
          :id="`${props.id}-error`"
          class="r-textfield__error"
          role="alert"
        >
          {{ errorMsg }}
        </p>
        <p
          v-else-if="hint"
          :id="`${props.id}-hint`"
          class="r-textfield__hint"
        >
          {{ hint }}
        </p>
      </div>
    </div>
  </div>
</template>
