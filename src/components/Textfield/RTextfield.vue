<script setup lang="ts">
import {
  computed,
  reactive,
  ref,
  watch,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
} from 'vue';
import './textfield.css';
import Icon from '../Icon/RIcon.vue';
import Label from '../Label/RLabel.vue';
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
  id: HTMLAttributes['id'];
  /**
   * Input type
   * @type 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
   * @default 'text'
   * @example
   * <Textfield type="password" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
   */
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

  /**
   * Input value
   * @type InputHTMLAttributes['value'];
   * @default ''
   * @example
   * <Textfield modelValue="Hello" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value
   */
  modelValue?: InputHTMLAttributes['value'];

  /**
   * label of the textfield
   * @type LabelHTMLAttributes['label']
   * @default ''
   * @example
   * <Textfield label="Textfield" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
   */
  label?: LabelHTMLAttributes['for'];

  /**
   * Placeholder text
   * @type InputHTMLAttributes['placeholder'];
   * @default ''
   * @example
   * <Textfield placeholder="Placeholder" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
   */
  placeholder?: InputHTMLAttributes['placeholder'];

  /**
   * Error message
   * @type string
   * @default ''
   * @example
   * <Textfield errorMsg="This is an error" />
   */
  errorMsg?: string;

  /**
   * Hint text
   * @type string
   * @default ''
   * @example
   * <Textfield hint="This is a hint" />
   */
  hint?: string;

  /**
   * Icon to prepend
   * @type string
   * @default ''
   * @example
   * <Textfield prependIcon="mdiLock" />
   */
  prependIcon?: string;

  /**
   * Icon to append
   * @type string
   * @default ''
   * @example
   * <Textfield appendIcon="mdiEyeOffOutline" />
   */
  appendIcon?: string;

  /**
   * Input disabled state
   * @type InputHTMLAttributes['disabled'] | boolean
   * @default false
   * @example
   * <Textfield disabled="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled
   */
  disabled?: boolean;

  /**
   * Input loading state
   * @type boolean
   * @default false
   * @example
   * <Textfield loading="true" />
   */
  loading?: boolean;

  /**
   * Input clearable state
   * @type boolean
   * @default false
   * @example
   * <Textfield clearable="true" />
   */
  clearable?: boolean;

  /**
   * Input number min value
   * @type InputHTMLAttributes['min']
   * @default ''
   * @example
   * <Textfield min="0" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
   */
  min?: InputHTMLAttributes['min'];

  /**
   * Input number max value
   * @type InputHTMLAttributes['max']
   * @default ''
   * @example
   * <Textfield max="10" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
   */
  max?: InputHTMLAttributes['max'];
}
const inputRef = ref<HTMLInputElement>();
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
});
const emit = defineEmits([
  'update:modelValue',
  'focus',
  'blur',
  'input',
  'click:icon',
  'click:clear',
]);
const state = reactive({
  value: '',
});
const typeOfInputRef = ref(props.type);
const prependIconsOfType = {
  password: 'mdiLock',
  email: 'mdiEmailOutline',
  tel: 'mdiPhone',
  url: 'mdiLink',
  number: 'mdiNumeric',
  text: '',
};
const isFocused = ref(false);
const isFilled = computed(() => !!state.value);
const classes = computed(() => {
  const { disabled, loading, clearable, errorMsg } = props;
  return {
    textfield: true,
    'textfield--error': errorMsg?.length,
    'textfield--loading': loading,
    'textfield--disabled': disabled,
    'textfield--clearable': clearable,
    'textfield--focus': isFocused.value,
    'textfield--filled': isFilled.value,
  };
});
const prependIconClasses = computed(() => {
  return {
    'textfield__prepend-icon': true,
    'textfield__prepend-icon--loading': props.loading,
    'textfield__prepend-icon--error': hasErrorMsg.value && isFilled.value,
  };
});
const appendIconClasses = computed(() => {
  return {
    'textfield__append-icon': true,
    'textfield__append-icon--clear': hasClear.value,
    'textfield__append-icon--error': hasErrorMsg.value,
  };
});
const hasValue = computed(() => {
  return state.value.length > 0;
});
const hasErrorMsg = computed(() => {
  return props.errorMsg?.length;
});
const hasClear = computed(() => {
  return props.clearable && hasValue.value;
});
const prependIconName = computed(() => {
  const { prependIcon, type } = props;
  if (prependIcon === 'none') return '';
  if (prependIcon) return prependIcon;
  return prependIconsOfType[type];
});
const appendIconName = computed(() => {
  const { appendIcon, type } = props;
  if (appendIcon === 'none') return '';
  if (hasErrorMsg.value) return 'mdiAlertCircleOutline';
  if (hasClear.value && ['text', 'email'].includes(type)) return 'mdiClose';
  if (type === 'password' && typeOfInputRef.value === 'password')
    return 'mdiEyeOutline';
  if (type === 'password' && typeOfInputRef.value === 'text')
    return 'mdiEyeOffOutline';
  return appendIcon;
});
/**
 * @description - focus event handler
 * @param {FocusEvent} e - FocusEvent object
 * @returns {void}
 */
const onFocus = (e: FocusEvent) => {
  isFocused.value = true;
  emit('focus', e);
};
/**
 * @description - blur event handler
 * @param {FocusEvent} e - FocusEvent object
 * @returns {void}
 */
const onBlur = (e: FocusEvent) => {
  isFocused.value = false;
  emit('blur', e);
};
/**
 * @description - Emit input event with value of input
 * @param {InputEvent} e - InputEvent object
 * @returns {void}
 */
const onInput = (e: InputEvent): void => {
  state.value = (e.target as HTMLInputElement).value;
  emit('input', e);
};
/**
 * @description - Emit click event with value of append icon
 * @returns {void}
 */
const clickIcon = (): void => {
  if (hasClear.value) {
    state.value = '';
    inputRef.value?.focus();
    emit('click:clear', {
      value: typeOfInputRef.value === 'number' ? +state.value : state.value,
    });
    return;
  }
  emit('click:icon', {
    value: typeOfInputRef.value === 'number' ? +state.value : state.value,
  });
  setPassType();
};
/**
 * @description - Set type of input to password or text
 * @returns {void}
 */
const setPassType = (): void => {
  typeOfInputRef.value =
    typeOfInputRef.value === 'password' ? 'text' : 'password';
};

const focusInput = () => {
  inputRef.value?.focus();
};

watch(
  () => props.modelValue,
  (value) => {
    state.value = value;
  },
  {
    immediate: true,
  }
);
watch(
  () => state.value,
  (value) => {
    emit(
      'update:modelValue',
      typeOfInputRef.value === 'number' ? +value : value
    );
  }
);
</script>
<template>
  <fieldset>
    <div
      :class="{
        textfield__wrapper: true,
      }"
    >
      <Label
        :id="props.id"
        :class="{
          textfield__label: true,
        }"
        :for="props.id"
        :text="props.label"
        @click="focusInput"
      />
      <div class="input-wrapper">
        <div :class="classes">
          <slot name="prepend" />
          <Icon
            v-if="prependIconName && !$slots['prepend']"
            :class="prependIconClasses"
            :name="prependIconName"
            :size="20"
          />
          <input
            ref="inputRef"
            :id="props.id"
            :disabled="props.disabled"
            :placeholder="props.placeholder"
            :type="typeOfInputRef"
            :value="state.value"
            :min="props.min"
            :max="props.max"
            @blur="onBlur"
            @focus="onFocus"
            @input="onInput"
          />
          <slot name="append" />
          <Icon
            v-if="appendIconName && !$slots['append']"
            :class="appendIconClasses"
            :name="`${appendIconName}`"
            :size="20"
            @click="clickIcon"
          />
        </div>
        <div class="textfield__error">{{ props.errorMsg }}</div>
        <div v-if="!props.errorMsg" class="textfield__hint">
          {{ props.hint }}
        </div>
      </div>
    </div>
  </fieldset>
</template>
