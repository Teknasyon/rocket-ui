<script setup lang="ts">
import './progressbar.css'

export interface ProgressBarProps {
  value: number
  height?: number
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  value: 0,
  height: 8,
})
</script>

<template>
  <progress
    :aria-valuemax="100"
    class="r-progressbar"
    :max="100"
    role="progressbar"
    :style="{ height: `${props.height}px` }"
    :value="props.value"
  />
</template>
