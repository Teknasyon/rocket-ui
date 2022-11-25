<script setup lang="ts">
import { computed, reactive } from 'vue';
import './checkbox.css';
import Icon from '../Icon/Icon.vue';
export interface Props {
  id: string;
  label: string | number;
  indeterminate?: boolean;
  disabled?: boolean;
  checked?: boolean;
  hint?: string;
  errorMsg?: string;
}
const props = withDefaults(defineProps<Props>(), {
  id: '',
  label: '',
  indeterminate: false,
  disabled: false,
  checked: false,
  hint: '',
  errorMsg: '',
});
const emit = defineEmits(['change']);
const state = reactive({
  checked: props.checked,
  indeterminate: props.indeterminate,
});
const icons = {
  checked: 'check',
  unchecked: '',
  indeterminate: 'remove',
};
const icon = computed(() => {
  if (state.indeterminate) {
    return icons.indeterminate;
  }
  return state.checked ? icons.checked : icons.unchecked;
});
const classes = computed(() => {
  return {
    checkbox: true,
    'checkbox--checked': state.checked,
    'checkbox--disabled': props.disabled,
    'checkbox--indeterminate': state.indeterminate,
    'checkbox--error': !!props.errorMsg,
  };
});
const onChange = () => {
  if (props.disabled) return;
  emit('change', {
    value: state.checked,
  });
};
const handleCheckbox = (icon: string) => {
  if (icon === icons.checked) {
    state.checked = false;
    state.indeterminate = false;
    return;
  }
  if (icon === icons.unchecked) {
    state.checked = true;
    state.indeterminate = false;
    return;
  }
  if (icon === icons.indeterminate) {
    state.checked = true;
    state.indeterminate = false;
    return;
  }
};
</script>
<template>
  <div class="checkbox-wrapper">
    <div class="checkbox-container">
      <input
        hidden
        type="checkbox"
        v-model="state.checked"
        :id="props.id"
        :disabled="props.disabled"
        :indeterminate="state.indeterminate"
        @change="onChange"
      />
      <div
        :class="classes"
        :data-disabled="props.disabled"
        @click="handleCheckbox(icon)"
      >
        <Icon size="16" :name="icon" />
      </div>
    </div>
    <div class="checkbox-texts">
      <label
        class="checkbox-texts__label"
        :for="props.id"
        :data-disabled="props.disabled"
      >
        {{ props.label }}
      </label>
      <p v-if="!!props.errorMsg" class="checkbox-texts__error">
        {{ props.errorMsg }}
      </p>
      <p v-else class="checkbox-texts__hint">
        {{ props.hint }}
      </p>
    </div>
  </div>
</template>
