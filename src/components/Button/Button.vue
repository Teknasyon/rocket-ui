<script setup lang="ts">
import './button.css';
import { computed } from 'vue';
import Icon from '../Icon/Icon.vue';
import { IconKind, type IconSize } from '../Shared/Enums';
export interface Props {
  variant: 'primary' | 'secondary' | 'icon' | 'text' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  iconColor?: string;
  iconSize?:
    | IconSize.XSmall
    | IconSize.Small
    | IconSize.Medium
    | IconSize.Large
    | IconSize.XLarge
    | string;
  iconKind?: IconKind.Outline | IconKind.Solid | IconKind.Mini | string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  backgroundColor?: string;
}
const props = defineProps<Props>();
const emit = defineEmits(['click']);
const classes = computed(() => ({
  button: true,
  [`button--${props.variant}`]: true,
  [`button--loading`]: props.loading,
  [`button--${props.size || 'medium'}`]: true,
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
      :kind="iconKind || IconKind.Solid"
      class="icon"
    />
    <slot name="custom-icon" />
    <slot v-if="props.variant !== 'icon'" />
  </button>
</template>
