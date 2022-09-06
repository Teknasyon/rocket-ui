<script setup lang="ts">
import { computed, reactive } from 'vue';
import './checkbox.css';
import Icon from '../Icon/Icon.vue';
export interface Props {
  id: string;
  label?: string | number;
  right?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  id: '',
  label: '',
  right: false,
  indeterminate: false,
  disabled: false,
  required: false,
});
const emit = defineEmits(['change']);
const state = reactive({
  checked: false,
});
const classes = computed(() => {
  return {
    checkbox: true,
    'checkbox--right': props.right,
    'checkbox--checked': state.checked || props.indeterminate,
    'checkbox--indeterminate': props.indeterminate,
    'checkbox--disabled': props.disabled,
    'checkbox--required': props.required,
  };
});
const icon = computed(() => {
  if (props.indeterminate && !state.checked) return 'MinusIcon';
  if (state.checked) return 'CheckIcon';
  return null;
});

const onChange = () => {
  emit('change', {
    value: state.checked,
  });
};
</script>
<template>
  <fieldset>
    <label :for="props.id || 'checkbox'">
      {{ props.label }}
      <input
        :id="props.id || 'checkbox'"
        type="checkbox"
        v-model="state.checked"
        :indeterminate.prop="props.indeterminate"
        @change="onChange"
      />
      <div v-if="!icon?.length" class="checkbox checkbox--empty" />
      <Icon v-else :name="icon" size="18" kind="solid" :class="classes" />
    </label>
  </fieldset>
</template>
