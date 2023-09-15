<script setup lang="ts">
import { computed } from 'vue';
import './sidebar.css';

export interface RSidebarProps {
  modelValue: boolean;
  showTrigger?: boolean;
  class?: string;
  triggerClass?: string;
}

const props = withDefaults(defineProps<RSidebarProps>(), {
  modelValue: false,
  showTrigger: true,
});

const classes = computed(() => ({
  'r-sidebar': true,

}));
</script>
<template>
  <div class="flex w-fit">
    <aside :class="[classes, props.class]" :data-open="props.modelValue">
      <nav class="r-sidebar__nav">
        <slot />
      </nav>
      <div class="r-sidebar__actions">
        <slot name="actions" />
      </div>
    </aside>
    <div v-if="props.showTrigger" class="r-sidebar__trigger" :class="[props.triggerClass]" :data-open="props.modelValue">
      <slot name="trigger">
        <button class="r-sidebar__trigger-button" @click="$emit('update:modelValue', !props.modelValue)">
          >
        </button>
      </slot>
    </div>
  </div>
</template>
