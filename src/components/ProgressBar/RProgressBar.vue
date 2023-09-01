<script setup lang="ts">
import './progressbar.css';
export interface ProgressBarProps {
  value: number;
  height?: number;
}
const props = withDefaults(defineProps<ProgressBarProps>(), {
  value: 0,
  height: 8,
});
</script>
<template>
  <progress
    class="r-progressbar"
    role="progressbar"
    :aria-valuemax="100"
    :max="100"
    :value="props.value"
    :style="{ height: props.height + 'px' }"
  />
</template>
