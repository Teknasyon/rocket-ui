<script setup lang="ts">
import Label from '../Label/Label.vue';
import './textarea.css';
import { defineProps, defineEmits } from 'vue';
export interface IProps {
  id: string;
  errorMsg?: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  label?: string;
  hint?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  id: '',
  errorMsg: '',
  disabled: false,
  placeholder: '',
  value: '',
  label: '',
  hint: 'This is a hint',
});

const emit = defineEmits(['input']);

function onInput(e: Event) {
  emit('input', (e.target as HTMLInputElement).value);
}
</script>

<template>
  <div class="container">
    <Label
      v-if="props.label"
      id="textarea"
      class="textarea__label"
      for="textarea"
      :text="props.label"
    />
    <textarea
      v-bind="$attrs"
      :id="props.id"
      class="textarea"
      :class="{
        'textarea--error': props.errorMsg,
        'textarea--disabled': props.disabled,
      }"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :value="props.value"
      @input="onInput"
    />
    <p v-if="props.errorMsg" class="textarea__error">
      {{ props.errorMsg }}
    </p>
    <p v-else class="textarea__hint">
      {{ props.hint }}
    </p>
  </div>
</template>
