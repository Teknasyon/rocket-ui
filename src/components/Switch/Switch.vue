<script setup lang="ts">
import { computed, reactive } from 'vue';
import './switch.css';
export interface Props {
  id?: string;
  value: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  label?: string;
  hint?: string;
}
const props = withDefaults(defineProps<Props>(), {
  id: 'switch',
  value: false,
  size: 'medium',
  disabled: false,
  label: '',
  hint: '',
});
const emit = defineEmits(['change']);
const state = reactive({
  value: props.value,
});
const classes = computed(() => {
  return {
    switch: true,
    'switch--disabled': props.disabled,
    [`switch--${props.size}`]: props.size,
  };
});
const onChange = () => {
  if (props.disabled) return;
  emit('change', { value: state.value });
};
const toggle = () => {
  if (props.disabled) return;
  state.value = !state.value;
};
</script>
<template>
  <div class="switch-container">
    <div :class="classes" @click="toggle">
      <input
        :id="props.id"
        v-bind="$attrs"
        type="checkbox"
        v-model="state.value"
        class="switch__input"
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
      <label :id="props.id" :for="props.id" class="switch-texts__label">
        {{ props.label }}
      </label>
      <p class="switch-texts__hint">{{ props.hint }}</p>
    </div>
  </div>
</template>
