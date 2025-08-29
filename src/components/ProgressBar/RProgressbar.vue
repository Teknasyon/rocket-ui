<script setup lang="ts">
import './progressbar.css'

export interface ProgressBarProps {
  value: number
  height?: number

  /**
   * Id of the ProgressBar
   * @type string
   * @default 'r-progressbar'
   * @example
   * <ProgressBar id="custom-progressbar" />
   */
  id?: string
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  value: 0,
  height: 8,
  id: 'r-progressbar',
})
</script>

<template>
  <progress
    :id="id"
    :aria-valuemax="100"
    class="r-progressbar"
    :max="100"
    role="progressbar"
    :style="{ height: `${props.height}px` }"
    :value="props.value"
  />
</template>
