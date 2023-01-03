<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import './textfield.css';
import Icon from '../Icon/Icon.vue';
import Label from '../Label/Label.vue';
// import { vFocus } from '../../directives';
export interface Props {
  id: string;
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  value?: string;
  label?: string;
  placeholder?: string;
  errorMsg?: string;
  hint?: string;
  prependIcon?: string;
  appendIcon?: string;
  iconColor?: string;
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
}
const inputRef = ref<HTMLInputElement>();
const props = withDefaults(defineProps<Props>(), {
  id: '',
  type: 'text',
  value: '',
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
const emit = defineEmits(['input', 'focus', 'blur', 'clickIcon']);
const state = reactive({
  value: props.value || '',
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
  }
  emit('clickIcon', {
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
  emit('input', {
    value: state.value,
  });
};
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
            v-bind="$attrs"
            :id="props.id"
            ref="inputRef"
            v-model="state.value"
            :disabled="props.disabled"
            :placeholder="props.placeholder"
            :type="typeOfInputRef"
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
