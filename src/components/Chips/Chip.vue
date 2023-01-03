<script setup lang="ts">
import { computed } from 'vue';
import Icon from '../Icon/Icon.vue';
import './chip.css';

export interface Props {
  variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  label?: string | number;
  disabled?: boolean;
  prependIcon?: string;
  appendIcon?: string;
  square?: boolean;
  ghost?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  label: 'label',
  disabled: false,
  prependIcon: '',
  appendIcon: '',
  square: false,
  ghost: false,
});
const emit = defineEmits(['clickChip', 'clickIcon']);
const classes = computed(() => {
  return {
    chip: true,
    'chip--disabled': props.disabled,
    [`chip__${props.variant}`]: props.variant,
    [`chip--${props.size}`]: props.size,
    'chip--square': props.square,
    [`chip__${props.variant}--ghost`]: props.ghost,
  };
});
const iconSize = computed<string>(() => {
  if (props.size === 'small') return '10';
  if (props.size === 'large') return '16';
  return '12';
});
const clickIcon = (e: MouseEvent) => {
  if (props.disabled) return;
  emit('clickIcon', e);
};
const clickChip = (e: MouseEvent) => {
  if (props.disabled) return;
  emit('clickChip', e);
};
</script>
<template>
  <div :class="classes">
    <Icon
      v-if="props.prependIcon"
      :aria-disabled="props.disabled"
      class="chip__prepend-icon"
      :name="props.prependIcon"
      :size="iconSize"
      @click.stop="clickIcon($event)"
    />
    <span class="chip__text" @click.stop="clickChip($event)">{{
      props.label
    }}</span>
    <Icon
      v-if="props.appendIcon"
      :aria-disabled="props.disabled"
      class="chip__append-icon"
      :name="props.appendIcon"
      :size="iconSize"
      @click.stop="clickIcon($event)"
    />
  </div>
</template>
