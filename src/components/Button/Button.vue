<script setup lang="ts">
import './button.css';
import { computed } from 'vue';
import Icon from '../Icon/Icon.vue';
export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'text'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export interface Props {
  variant: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  prependIcon?: string;
  appendIcon?: string;
  onlyIcon?: boolean;
  size?: ButtonSize;
  height?: string;
  block?: boolean;
  backgroundColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  loading: false,
  disabled: false,
  prependIcon: '',
  appendIcon: '',
  onlyIcon: false,
  size: 'medium',
  height: '',
  block: false,
  backgroundColor: '',
});
const classes = computed(() => ({
  button: true,
  [`button--${props.variant}`]: true,
  [`button--loading`]: props.loading,
  [`button--${props.size || 'medium'}`]: true,
  [`button--only-icon`]: props.onlyIcon,
  [`button--block`]: props.block,
}));
defineEmits(['click']);
const iconSize = computed(() => {
  return props.size === 'large' ? 20 : 16;
});
const style = computed(() => {
  const { backgroundColor, height } = props;
  return {
    backgroundColor,
    height: height ? `${height}px` : '',
  };
});
</script>
<template>
  <button
    v-bind="$attrs"
    :class="classes"
    :disabled="disabled || loading"
    :style="style"
    @click.stop="$emit('click')"
  >
    <slot name="custom-icon" />

    <Icon
      v-if="!$slots['custom-icon']"
      :class="{
        'button__prepend-icon': true,
        'button__prepend-icon--only': props.onlyIcon,
      }"
      :name="props.prependIcon"
      :size="iconSize"
    />
    <slot v-if="!props.onlyIcon" />
    <Icon
      v-if="!$slots['custom-icon'] && !props.onlyIcon"
      class="button__append-icon"
      :name="props.appendIcon"
      :size="iconSize"
    />
  </button>
</template>
