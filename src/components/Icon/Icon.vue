<script setup lang="ts">
import 'material-icons/iconfont/material-icons.css';
import { computed } from 'vue';

export interface IProps {
  name: string;
  kind?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  size?: string | number;
  color?: string;
  fontWeight?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  name: 'face',
  kind: 'outlined',
  size: 24,
  color: '',
  fontWeight: () => 'light',
});

const styles = computed(() => {
  return {
    fontSize: `${props.size}px`,
    fontWeight: `${props.fontWeight}`,
    color: props.color,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

const classes = computed(() => {
  if (props.kind === 'filled') {
    return 'material-icons';
  }
  return `material-icons-${props.kind}`;
});
</script>
<template>
  <span :class="classes" :style="styles">{{ props.name }}</span>
</template>
