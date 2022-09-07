<script setup lang="ts">
import { computed, reactive } from 'vue';
import Icon from '../Icon/Icon.vue';
import './chip.css';

export interface Props {
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  size?: 'small' | 'medium' | 'large';
  label?: string | number;
  iconLeft?: boolean;
  disabled?: boolean;
  icon?: string;
  square?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  label: 'label',
  iconLeft: false,
  disabled: false,
  icon: '',
  square: false,
});
const emit = defineEmits(['click']);
const classes = computed(() => {
  return {
    chip: true,
    'chip--iconLeft': props.iconLeft,
    'chip--disabled': props.disabled,
    [`chip--${props.variant}`]: props.variant,
    [`chip--${props.size}`]: props.size,
    'chip--square': props.square,
    'chip--reverse': props.iconLeft,
  };
});
const iconSize = computed<string>(() => {
  if (props.size === 'small') return '14';
  if (props.size === 'large') return '20';
  return '16';
});
const handleClick = () => {
  if (props.disabled) return;
  emit('click');
};
</script>
<template>
  <div :class="classes">
    <span class="chip__text">{{ props.label }}</span>
    <Icon
      v-if="props.icon"
      :name="props.icon"
      :size="iconSize"
      :aria-disabled="props.disabled"
      class="chip__icon"
      @click="handleClick"
    />
  </div>
</template>
