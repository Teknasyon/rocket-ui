<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import './textfield.css';
import Icon from '../Icon/Icon.vue';
export interface Props {
  id: string;
  value?: string;
  label?: string;
  placeholder?: string;
  errorMsg?: string;
  icon?: string;
  iconColor?: string;
  iconLeft?: boolean;
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  size?: 'small' | 'medium' | 'large';
  row?: boolean;
}
const inputRef = ref<HTMLInputElement>();
const props = withDefaults(defineProps<Props>(), {
  id: '',
  value: '',
  label: '',
  placeholder: '',
  errorMsg: '',
  icon: '',
  iconColor: '',
  iconLeft: false,
  disabled: false,
  loading: false,
  clearable: false,
  size: 'medium',
  row: false,
});
const emit = defineEmits(['change', 'input', 'focus', 'blur', 'click']);
const state = reactive({
  value: props.value || '',
});
const classes = computed(() => {
  return {
    textfield: true,
    'textfield--error': props.errorMsg?.length,
    'textfield--reverse': props.iconLeft,
    'textfield--loading': props.loading,
    'textfield--disabled': props.disabled,
    'textfield--clearable': props.clearable,
    [`textfield--${props.size}`]: props.size,
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
const iconName = computed(() => {
  if (hasClear.value) return props.icon || 'clear';
  if (hasErrorMsg.value) return props.icon || 'error';
  return props.icon;
});
const iconSize = computed(() => {
  if (props.size === 'small') return 16;
  if (props.size === 'large') return 24;
  return 20;
});
const onChange = () => {
  emit('change', {
    value: state.value,
  });
};
const onInput = () => {
  emit('input', {
    value: state.value,
  });
};
const onFocus = () => {
  emit('focus', {
    value: state.value,
  });
};
const onBlur = () => {
  emit('blur', {
    value: state.value,
  });
};
const onClick = () => {
  if (hasClear.value) {
    state.value = '';
    inputRef.value.focus();
  }
  emit('click', {
    value: state.value,
  });
};
</script>
<template>
  <fieldset>
    <div
      :class="{
        textfield__wrapper: true,
        'textfield__wrapper--row': props.row,
      }"
    >
      <label
        :for="props.id || 'textfield'"
        :class="{
          textfield__label: true,
          [`textfield__label--${props.size}`]: props.size,
        }"
      >
        {{ props.label }}
      </label>
      <div :class="classes">
        <input
          ref="inputRef"
          v-model="state.value"
          type="text"
          :id="props.id || 'textfield'"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          @change="onChange"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
        />
        <Icon
          class="textfield__icon"
          kind="filled"
          :size="iconSize"
          :name="`${iconName}`"
          :color="props.iconColor"
          :class="{ 'textfield__icon--error': hasErrorMsg }"
          @click="onClick"
        />
      </div>
    </div>
    <div class="textfield__error">{{ props.errorMsg }}</div>
  </fieldset>
</template>
