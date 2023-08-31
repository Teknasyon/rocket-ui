<script setup lang="ts">
import './progressbar.css';
export interface ProgressBarProps {
  value: number;
  height?: number;
  indeterminate?: boolean;
}
const props = withDefaults(defineProps<ProgressBarProps>(), {
  value: 40,
  height: 20,
  indeterminate: false,
});
</script>
<template>
  <div class="r-progressbar">
    <div
      :class="{
        'r-progressbar__bar': true,
        'r-progressbar__bar--indeterminate': props.indeterminate,
      }"
      :style="{ width: `${props.value}%`, height: props.height }"
    >
      <slot>
        <span class="r-progressbar__text">{{ props.value }}%</span>
      </slot>
    </div>
  </div>
</template>
