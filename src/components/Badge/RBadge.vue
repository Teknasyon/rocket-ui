<script setup lang="ts">
import './badge.css';
import { computed } from 'vue';

export interface BadgeProps {
  /**
   * Variant of the Badge
   * @type { 'primary' | 'success' | 'warning' | 'error' | 'neutral' }
   * @default 'primary'
   * @example
   * <Badge variant="primary" />
   */
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral'

  /**
   * Placement of the Badge
   * @type { 'right' | 'bottom' | 'left' }
   * @default 'right'
   * @example
   * <Badge placement="right" />
   */
  placement?: 'right' | 'bottom' | 'left'

  /**
   * Overlap the Badge
   * @type { boolean }
   * @default false
   * @example
   * <Badge overlap />
   */
  overlap?: boolean

  /**
   * Show the Badge on hover
   * @type { boolean }
   * @default false
   * @example
   * <Badge hover />
   */
  hover?: boolean

  /**
   * Show the Badge outside
   * @type { boolean }
   * @default false
   * @example
   * <Badge outside />
   */
  outside?: boolean

  /**
   * Show the Badge animation
   * @type { boolean }
   * @default false
   * @example
   * <Badge animation />
   */
  animation?: boolean
}
const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  placement: 'right',
  overlap: false,
  hover: false,
  content: '',
  outside: false,
});
defineEmits(['click']);
const classes = computed(() => {
  return {
    'r-badge': true,
    'r-badge__content': props.content,
    [`r-badge--overlap-${props.placement}`]: props.overlap,
    [`r-badge--${props.placement}`]: props.placement,
    [`r-badge--outside-${props.placement}`]: props.outside,
    'r-badge--hover': props.hover,
    [`r-badge--${props.variant}`]: props.variant,
  };
});
</script>

<template>
  <div class="r-badge-wrapper group">
    <span :class="[{ 'animate-ping': props.animation }, classes]" />
    <span :class="classes" />
    <slot />
  </div>
</template>
