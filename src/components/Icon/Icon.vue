<script setup lang="ts">
import 'material-icons/iconfont/material-icons.css';
import { computed } from 'vue';

export interface Props {
  name: string;
  kind?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  size?: string | number;
  color?: string;
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
}
const props = withDefaults(defineProps<Props>(), {
  name: 'face',
  kind: 'outlined',
  size: 24,
  color: 'currentColor',
  fontWeight: () => 'regular',
});

const styles = computed(() => {
  return {
    fontSize: `${props.size}px`,
    fontWeight: `${props.fontWeight}`,
    color: props.color,
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
