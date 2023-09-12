<script setup lang="ts">
import { computed } from 'vue';
import './sidebar.css';

export interface RSidebarProps {
  modelValue: boolean;
}

const props = withDefaults(defineProps<RSidebarProps>(), {
  modelValue: false,
});

const classes = computed(() => ({
  'r-sidebar': true,
  'r-sidebar--open': props.modelValue,
}));
</script>
<template>
  <aside :class="classes">
    <nav class="r-sidebar__nav">
      <slot />
    </nav>
    <div class="r-sidebar__actions">
      <slot name="actions" />
    </div>
  </aside>
</template>
