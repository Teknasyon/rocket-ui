<script setup lang="ts">
import './label.css';
export interface LabelProps {
  id: string;
  for: string;
  text: string;
}
const props = withDefaults(defineProps<LabelProps>(), {
  id: '',
  for: '',
  text: '',
});
</script>
<template>
  <label :for="props.for">{{ text }}</label>
</template>
