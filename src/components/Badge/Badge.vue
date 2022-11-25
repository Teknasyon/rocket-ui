<script setup lang="ts">
import './badge.css';
import { computed } from 'vue';

export interface BadgeProps {
  placement?: 'right' | 'bottom' | 'left';
  overlap?: boolean;
  hover?: boolean;
  content?: string | number;
  outside?: boolean;
}
const props = withDefaults(defineProps<BadgeProps>(), {
  placement: 'right',
  overlap: false,
  hover: false,
  content: '',
  outside: false,
});
defineEmits(['click']);
const classes = computed(() => {
  return {
    badge: true,
    badge__content: props.content,
    [`badge--overlap-${props.placement}`]: props.overlap,
    [`badge--${props.placement}`]: props.placement,
    [`badge--outside-${props.placement}`]: props.outside,
    'badge--hover': props.hover,
    'badge--no-content': !props.content,
  };
});
</script>
<template>
  <div class="badge-wrapper group">
    <span :class="classes" @click="$emit('click')">
      {{ props.content }}
    </span>
    <slot />
  </div>
</template>
