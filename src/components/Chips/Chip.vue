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
  ghost?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  label: 'label',
  disabled: false,
  prependIcon: '',
  appendIcon: '',
  ghost: false,
});
const emit = defineEmits(['click:chip', 'click:close']);
const classes = computed<object>(() => {
  return {
    chip: true,
    'chip--disabled': props.disabled,
    [`chip__${props.variant}`]: props.variant,
    [`chip--${props.size}`]: props.size,
    [`chip__${props.variant}--ghost`]: props.ghost,
  };
});
const iconSize = computed<string>(() => {
  if (props.size === 'small') return '10';
  if (props.size === 'large') return '16';
  return '12';
});
const clickChip = (e: MouseEvent) => {
  if (props.disabled) return;
  emit('click:chip', e);
};
const clickClose = (e: MouseEvent) => {
  if (props.disabled) return;
  emit('click:close', e);
};
</script>
<template>
  <div :class="classes">
    <div class="chip__content" @click.stop="clickChip($event)">
      <Icon
        v-if="props.prependIcon"
        :aria-disabled="props.disabled"
        class="chip__prepend-icon"
        :name="props.prependIcon"
        :size="iconSize"
      />
      <span>{{ props.label }}</span>
    </div>
    <Icon
      v-if="props.appendIcon"
      :aria-disabled="props.disabled"
      class="chip__append-icon"
      :name="props.appendIcon"
      :size="iconSize"
      @click.stop="clickClose($event)"
    />
  </div>
</template>
