<script setup lang="ts">
import { computed, reactive } from 'vue';
import './textfield.css';
import Icon from '../Icon/Icon.vue';
export interface Props {
  id: string;
  value: string;
  label?: string;
  placeholder?: string;
  errorMsg?: string;
  icon?: string;
  iconColor?: string;
  iconLeft?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(['change']);
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
  };
});
const onChange = () => {
  emit('change', {
    value: state.value,
  });
};
</script>
<template>
  <fieldset>
    <div class="textfield__wrapper">
      <label :for="props.id || 'textfield'" class="textfield__label">
        {{ props.label }}
      </label>
      <div :class="classes">
        <input
          :id="props.id || 'textfield'"
          v-model="state.value"
          type="text"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          @change="onChange"
        />
        <Icon
          v-if="props.errorMsg?.length || props.icon?.length"
          :name="props.icon || 'ExclamationCircleIcon'"
          :color="props.iconColor"
          size="24"
          kind="solid"
          class="textfield__error-icon"
        />
      </div>
    </div>
    <div class="textfield__error">{{ props.errorMsg }}</div>
  </fieldset>
</template>
