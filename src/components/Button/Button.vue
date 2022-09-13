<script setup lang="ts">
import './button.css';
import { computed } from 'vue';
import Icon from '../Icon/Icon.vue';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'icon'
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
  iconSize: '',
  iconKind: '',
  iconRight: false,
  size: 'medium',
  type: 'button',
  backgroundColor: '',
});
const emit = defineEmits(['click']);
const classes = computed(() => ({
  button: true,
  [`button--${props.variant}`]: true,
  [`button--loading`]: props.loading,
  [`button--${props.size || 'medium'}`]: true,
  'button--reverse': props.iconRight,
}));
const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
const onClick = () => {
  emit('click');
};
</script>
<template>
  <button
    :type="type || 'button'"
    :class="classes"
    :style="style"
    :disabled="disabled || loading"
    @click="onClick"
  >
    <Icon
      :name="`${icon}`"
      :size="iconSize || '24'"
      :color="iconColor"
      :kind="iconKind || 'solid'"
      class="button__icon"
      :class="[iconRight ? 'button__icon--right' : 'button__icon--left']"
    />
    <slot name="custom-icon" />
    <slot v-if="props.variant !== 'icon'" />
  </button>
</template>
