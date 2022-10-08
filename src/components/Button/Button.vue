<script setup lang="ts">
import './button.css';
import { computed } from 'vue';
import Icon from '../Icon/Icon.vue';
export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'icon-only'
  | 'text'
  | 'outline'
  | 'link'
  | 'danger';
export interface Props {
  variant: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  iconColor?: string;
  iconSize?: string;
  iconKind?: string;
  iconRight?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  backgroundColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  loading: false,
  disabled: false,
  icon: '',
  iconColor: '',
  iconSize: '24',
  iconKind: '',
  iconRight: false,
  size: 'medium',
  type: 'button',
  backgroundColor: '',
});
const classes = computed(() => ({
  button: true,
  [`button--${props.variant}`]: true,
  [`button--loading`]: props.loading,
  [`button--${props.size || 'medium'}`]: true,
  'button--reverse': props.iconRight,
}));
defineEmits(['click']);
const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
</script>
<template>
  <button
    :type="type || 'button'"
    :class="classes"
    :style="style"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <slot name="custom-icon" />

    <Icon
      v-if="!$slots['custom-icon'] && icon"
      :name="icon"
      :size="iconSize"
      :color="iconColor"
      kind="filled"
      class="button__icon"
      :class="[iconRight ? 'button__icon--right' : 'button__icon--left']"
    />
    <slot v-if="props.variant !== 'icon-only'" />
  </button>
</template>
