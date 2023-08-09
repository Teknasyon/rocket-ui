<script setup lang="ts">
import './button.css';
import { computed, type CSSProperties } from 'vue';
import Icon from '../Icon/RIcon.vue';
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
  /**
   * Variant of the Button
   * @type 'primary' | 'secondary' | 'text' | 'outline' | 'ghost' | 'link' | 'danger'
   * @default 'primary'
   * @example
   * <Button variant="primary" />
   */
  variant: ButtonType;

  /**
   * Loading state of the Button
   * @type boolean
   * @default false
   * @example
   * <Button loading />
   */
  loading?: boolean;

  /**
   * Disabled state of the Button
   * @type boolean
   * @default false
   * @example
   * <Button disabled />
   */
  disabled?: boolean;

  /**
   * Prepend icon of the Button
   * @type string
   * @default ''
   * @example
   * <Button prependIcon="icon" />
   */
  prependIcon?: string;

  /**
   * Append icon of the Button
   * @type string
   * @default ''
   * @example
   * <Button appendIcon="icon" />
   */
  appendIcon?: string;

  /**
   * Only icon state of the Button
   * @type boolean
   * @default false
   * @example
   * <Button onlyIcon />
   */
  onlyIcon?: boolean;

  /**
   * Size of the Button
   * @type 'small' | 'medium' | 'large'
   * @default 'medium'
   * @example
   * <Button size="small" />
   */
  size?: ButtonSize;

  /**
   * Height of the Button
   * @type string
   * @default ''
   * @example
   * <Button height="40" />
   */
  height?: string;

  /**
   * Block state of the Button
   * @type boolean
   * @default false
   * @example
   * <Button block />
   * @link https://tailwindcss.com/docs/display#block
   */
  block?: boolean;

  /**
   * Background color of the Button
   * @type CSSProperties['backgroundColor']
   * @default ''
   * @example
   * <Button backgroundColor="red" />
   */
  backgroundColor?: CSSProperties['backgroundColor'];
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
  return {
    small: 20,
    medium: 24,
    large: 32,
  }[props.size || 'medium'];
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
      v-if="!$slots['custom-icon'] && props.prependIcon"
      :class="{
        'button__prepend-icon': true,
        'button__prepend-icon--only': props.onlyIcon,
      }"
      :name="props.prependIcon"
      :size="iconSize"
    />
    <slot v-if="!props.onlyIcon" />
    <Icon
      v-if="!$slots['custom-icon'] && !props.onlyIcon && props.appendIcon"
      class="button__append-icon"
      :name="props.appendIcon"
      :size="iconSize"
    />
  </button>
</template>
