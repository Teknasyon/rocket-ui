<script setup lang="ts">
import './button.css';
import { computed } from 'vue';
export interface Props {
  label?: string;
  type: string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}
const props = defineProps<Props>();
const emit = defineEmits(['click']);

const classes = computed(() => ({
  button: true,
  [`button--${props.type}`]: true,
  [`button--${props.size || 'medium'}`]: true,
}));
const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
const onClick = () => {
  emit('click');
};
</script>
<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>
