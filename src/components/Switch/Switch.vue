<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import './switch.css';
export interface Props {
  id?: string;
  value: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  label?: string;
  hint?: string;
  errorMsg?: string;
}
const props = withDefaults(defineProps<Props>(), {
  id: 'switch',
  value: false,
  size: 'medium',
  disabled: false,
  label: '',
  hint: '',
  errorMsg: '',
});
const emit = defineEmits(['change']);
const state = reactive({
  value: false,
});
const classes = computed(() => {
  return {
    switch: true,
    'switch--disabled': props.disabled,
    [`switch--${props.size}`]: props.size,
    'switch--error': props.errorMsg,
  };
});
const onChange = () => {
  if (props.disabled) return;
  emit('change', { value: state.value });
};
watch(
  () => props.value,
  (value) => {
    state.value = value;
  }
);
</script>
<template>
  <div class="switch-container">
    <div :class="classes">
      <input
        :id="props.id"
        v-bind="$attrs"
        v-model="state.value"
        class="switch__input"
        type="checkbox"
        @change="onChange"
      />
      <span class="slider round" />
    </div>
    <div
      :class="{
        'switch-texts': true,
        [`switch-texts--${props.size}`]: true,
      }"
    >
      <label :id="props.id" class="switch-texts__label" :for="props.id">
        {{ props.label }}
      </label>
      <p v-if="props.errorMsg" class="switch-texts__error">
        {{ props.errorMsg }}
      </p>
      <p v-else class="switch-texts__hint">{{ props.hint }}</p>
    </div>
  </div>
</template>
