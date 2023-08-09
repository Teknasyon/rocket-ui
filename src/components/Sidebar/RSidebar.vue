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
  sidebar: true,
  'sidebar--open': props.modelValue,
}));
</script>
<template>
  <aside :class="classes">
    <nav class="nav">
      <slot />
    </nav>
    <div class="actions">
      <slot name="actions" />
    </div>
  </aside>
</template>
