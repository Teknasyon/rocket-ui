<script setup lang="ts">
import { computed, reactive } from 'vue';
import './switch.css';
export interface Props {
  id?: string;
  value: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  id: 'switch',
  value: false,
  size: 'medium',
  disabled: false,
});
const emit = defineEmits(['change']);
const state = reactive({
  value: props.value || false,
});
const classes = computed(() => {
  return {
    switch: true,
    'switch--disabled': props.disabled,
    [`switch--${props.size}`]: props.size,
  };
});
const onChange = () => {
  emit('change', { value: state.value });
};
</script>
<template>
  <fieldset>
    <label :for="props.id || 'switch'" :class="classes">
      <input
        v-bind="$attrs"
        :id="props.id || 'switch'"
        type="checkbox"
        :disabled="props.disabled"
        v-model="state.value"
        class="switch__input"
        @change="onChange"
      />
      <span class="slider round" />
    </label>
  </fieldset>
</template>
