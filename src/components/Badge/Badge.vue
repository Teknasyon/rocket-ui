<script setup lang="ts">
import './badge.css';
import { defineProps, defineEmits, computed } from 'vue';
import Icon from '../Icon/Icon.vue';

export interface BadgeProps {
  placement?: 'right' | 'bottom' | 'left';
  bgColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  square?: boolean;
  overlap?: boolean;
  hover?: boolean;
  icon?: string;
  content?: string | number;
  bordered?: boolean;
  over?: boolean;
}
const props = withDefaults(defineProps<BadgeProps>(), {
  placement: 'right',
  bgColor: '#2dd4bf',
  color: '#fff',
  size: 'medium',
  square: false,
  overlap: false,
  hover: false,
  icon: '',
  content: '',
  bordered: false,
  over: false,
});
const emit = defineEmits(['click']);
const classes = computed(() => {
  return {
    badge: true,
    badge__content: props.content,
    [`badge--overlap-${props.placement}`]: props.overlap,
    [`badge--${props.placement}`]: props.placement,
    [`badge--over-${props.placement}`]: props.over,
    [`badge__content--${props.size}`]: props.size,
    [`badge--${props.bgColor}`]: props.bgColor,
    [`badge--${props.size}`]: props.size,
    'badge--bordered': props.bordered,
    'badge--square': props.square,
    'badge--hover': props.hover,
  };
});
const styles = computed(() => {
  return {
    backgroundColor: props.bgColor,
    color: props.color,
  };
});
const iconSize = computed(() => {
  return {
    small: '16',
    medium: '20',
    large: '24',
  }[props.size];
});
const onClick = () => emit('click');
</script>
<template>
  <div class="badge-wrapper group">
    <div
      v-if="!props.icon && props.content"
      :style="styles"
      :class="classes"
      @click="onClick"
    >
      {{ props.content }}
    </div>
    <Icon
      :name="props.icon"
      :class="classes"
      :color="props.color"
      :size="iconSize"
      @click="onClick"
    />
    <slot />
  </div>
</template>
