<script setup lang="ts">
import { computed } from 'vue';
import IconList from '../Shared/IconList';
import type { IconKind, IconSize } from '../Shared/Enums';
export interface Props {
  name: string;
  kind?: IconKind.Outline | IconKind.Solid | IconKind.Mini | string;
  size?:
    | IconSize.XSmall
    | IconSize.Small
    | IconSize.Medium
    | IconSize.Large
    | IconSize.XLarge
    | string;
  color?: string;
}

const props = defineProps<Props>();

const styles = computed(() => {
  const { size, color } = props;
  return {
    color,
    width: size,
    height: size,
  };
});

const Icon = computed(() => {
  return IconList[props.kind || 'solid'][props.name || 'AcademicCapIcon'];
});
</script>
<template>
  <component :is="Icon" :style="styles" />
</template>
