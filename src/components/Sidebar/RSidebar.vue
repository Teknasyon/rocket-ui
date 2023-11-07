<script setup lang="ts">
import './sidebar.css'

export interface RSidebarProps {
  modelValue: boolean
  showTrigger?: boolean
  class?: string | string[]
  triggerClass?: string | string[]
  wrapperClass?: string | string[]
}

const props = withDefaults(defineProps<RSidebarProps>(), {
  modelValue: false,
  showTrigger: true,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="r-sidebar__wrapper" :class="[$props.wrapperClass]" :data-open="props.modelValue">
    <aside class="r-sidebar" :class="[props.class]" :data-open="props.modelValue">
      <slot />
    </aside>
    <div
      v-if="props.showTrigger"
      class="r-sidebar__trigger"
      :class="[props.triggerClass]"
      :data-open="props.modelValue"
      @click="emit('update:modelValue', !props.modelValue)"
    >
      <slot name="trigger">
        >
      </slot>
    </div>
  </div>
</template>
