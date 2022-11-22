<script setup lang="ts">
import './label.css';
export interface LabelProps {
  id: string;
  for: string;
  text: string | number;
}
const props = withDefaults(defineProps<LabelProps>(), {
  id: '',
  for: '',
  text: '',
});
</script>
<template>
  <label :id="props.id" :for="props.for">{{ props.text }}</label>
</template>
