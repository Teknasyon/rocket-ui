<script setup lang="ts">
import './badge.css';
import { computed } from 'vue';

export interface BadgeProps {
  /**
   * Variant of the Badge
   * @type 'primary' | 'success' | 'warning' | 'error' | 'neutral'
   * @default 'primary'
   * @example
   * <Badge variant="primary" />
   */
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';

  /**
   * Placement of the Badge
   * @type 'right' | 'bottom' | 'left'
   * @default 'right'
   * @example
   * <Badge placement="right" />
   */
  placement?: 'right' | 'bottom' | 'left';

  /**
   * Overlap the Badge
   * @type boolean
   * @default false
   * @example
   * <Badge overlap />
   */
  overlap?: boolean;

  /**
   * Show the Badge on hover
   * @type boolean
   * @default false
   * @example
   * <Badge hover />
   */
  hover?: boolean;

  /**
   * Content of the Badge
   * @type string | number
   * @default ''
   * @example
   * <Badge content="1" />
   */
  content?: string | number;

  /**
   * Show the Badge outside
   * @type boolean
   * @default false
   * @example
   * <Badge outside />
   */
  outside?: boolean;
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
    badge: true,
    badge__content: props.content,
    [`badge--overlap-${props.placement}`]: props.overlap,
    [`badge--${props.placement}`]: props.placement,
    [`badge--outside-${props.placement}`]: props.outside,
    'badge--hover': props.hover,
    'badge--no-content': !props.content,
    [`badge--${props.variant}`]: props.variant,
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
