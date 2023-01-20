<script setup lang="ts">
import {
  computed,
  reactive,
  ref,
  watch,
  type CSSProperties,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
} from 'vue';
import './textfield.css';
import Icon from '../Icon/Icon.vue';
import Label from '../Label/Label.vue';
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
   * <Textfield prependIcon="lock_outline" />
   */
  prependIcon?: string;

  /**
   * Icon to append
   * @type string
   * @default ''
   * @example
   * <Textfield appendIcon="lock_outline" />
   */
  appendIcon?: string;

  /**
   * Color of the icon
   * @type CSSProperties['color']
   * @default ''
   * @example
   * <Textfield iconColor="red" />
   */
  iconColor?: CSSProperties['color'];

  /**
   * Input disabled state
   * @type InputHTMLAttributes['disabled']
   * @default false
   * @example
   * <Textfield disabled="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled
   */
  disabled?: InputHTMLAttributes['disabled'];

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
  'click:icon',
  'click:clear',
]);
const state = reactive({
  value: '',
});
const typeOfInputRef = ref(props.type);
const prependIconsOfType = {
  password: 'lock_outline',
  email: 'mail_outline',
  tel: 'phone',
  url: 'link',
  number: '123',
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
  if (prependIcon) return prependIcon;
  return prependIconsOfType[type];
});
const appendIconName = computed(() => {
  const { appendIcon, type } = props;
  if (hasErrorMsg.value) return 'error_outline';
  if (hasClear.value && ['text', 'email'].includes(type)) return 'clear';
  if (type === 'password' && typeOfInputRef.value === 'password')
    return 'visibility';
  if (type === 'password' && typeOfInputRef.value === 'text')
    return 'visibility_off';
  return appendIcon;
});
/**
 * @description - focus event handler
 */
const onFocus = () => {
  isFocused.value = true;
  emit('focus', {
    value: state.value,
  });
};
/**
 * @description - blur event handler
 */
const onBlur = () => {
  isFocused.value = false;
  emit('blur', {
    value: state.value,
  });
};
/**
 * @description - Emit click event with value of append icon
 * @returns {void}
 */
const clickIcon = () => {
  if (hasClear.value) {
    state.value = '';
    inputRef.value?.focus();
    emit('click:clear', {
      value: state.value,
    });
    return;
  }
  emit('click:icon', {
    value: state.value,
  });
  setPassType();
};
/**
 * @description - Set type of input to password or text
 * @returns {void}
 */
const setPassType = () => {
  typeOfInputRef.value =
    typeOfInputRef.value === 'password' ? 'text' : 'password';
};
/**
 * @description - Emit input event with value of input
 * @param {Event} event - Event object
 * @returns {void}
 */
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  state.value = target.value;
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
    emit('update:modelValue', value);
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
      />
      <div class="input-wrapper">
        <div :class="classes">
          <Icon
            v-if="prependIconName"
            :class="prependIconClasses"
            :name="prependIconName"
            :size="16"
          />
          <input
            :id="props.id"
            ref="inputRef"
            :disabled="props.disabled"
            :placeholder="props.placeholder"
            :type="typeOfInputRef"
            :value="state.value"
            @blur="onBlur"
            @focus="onFocus"
            @input="onInput"
          />
          <Icon
            v-if="appendIconName"
            :class="appendIconClasses"
            :color="props.iconColor"
            :name="`${appendIconName}`"
            :size="16"
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
