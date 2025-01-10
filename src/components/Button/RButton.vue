<script setup lang="ts">
import './button.css'
import { computed } from 'vue'
import Icon from '../Icon/RIcon.vue'

export type ButtonType =
  | 'default'
  | 'text'
  | 'outline'

export type ButtonColor = | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'
export type ButtonSize = | 'small' | 'medium' | 'large'
export interface Props {
  /**
   * Variant of the Button
   * @type  { 'default' | 'text' | 'outline' | 'ghost'}
   * @default 'default'
   * @example
   * <Button variant="default" />
   */
  variant?: ButtonType

  /**
   * Color of the Button
   * @type  { 'primary' | 'secondary' | 'danger'}
   * @default 'primary'
   * @example
   * <Button color="primary" />
   */
  color?: ButtonColor

  /**
   * Loading state of the Button
   * @type { boolean }
   * @default false
   * @example
   * <Button loading />
   */
  loading?: boolean

  /**
   * Disabled state of the Button
   * @type { boolean }
   * @default false
   * @example
   * <Button disabled />
   */
  disabled?: boolean

  /**
   * Prepend icon of the Button
   * @type { string }
   * @default ''
   * @example
   * <Button prependIcon="icon" />
   */
  prependIcon?: string

  /**
   * Append icon of the Button
   * @type { string }
   * @default ''
   * @example
   * <Button appendIcon="icon" />
   */
  appendIcon?: string

  /**
   * Only icon state of the Button
   * @type { boolean }
   * @default false
   * @example
   * <Button icon />
   */
  icon?: boolean

  /**
   * Size of the Button
   * @type { 'small' | 'medium' | 'large' }
   * @default 'medium'
   * @example
   * <Button size="small" />
   */
  size?: ButtonSize

  /**
   * Height of the Button
   * @type { string }
   * @default ''
   * @example
   * <Button height="40" />
   */
  height?: string

  /**
   * Block state of the Button
   * @type { boolean }
   * @default false
   * @example
   * <Button block />
   */
  block?: boolean

  /**
   * Aria label for the button
   * @type { string }
   * @default ''
   * @example
   * <Button aria-label="Close dialog" />
   */
  ariaLabel?: string

  /**
   * Aria pressed state for toggle buttons
   * @type { boolean }
   * @default undefined
   * @example
   * <Button :aria-pressed="isPressed" />
   */
  ariaPressed?: boolean

  /**
   * Aria expanded state for buttons that control expandable elements
   * @type { boolean }
   * @default undefined
   * @example
   * <Button :aria-expanded="isExpanded" />
   */
  ariaExpanded?: boolean

  /**
   * Aria controls - ID of the element this button controls
   * @type { string }
   * @default ''
   * @example
   * <Button aria-controls="menu-1" />
   */
  ariaControls?: string
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  loading: false,
  disabled: false,
  prependIcon: '',
  appendIcon: '',
  icon: false,
  size: 'medium',
  height: '',
  block: false,
  ariaLabel: '',
  ariaControls: '',
})
defineEmits(['click'])
const classes = computed(() => ({
  'r-button': true,
  [`r-button__${props.variant}`]: true,
  [`r-button__${props.variant}--${props.variant === 'default' && props.color === undefined ? 'primary' : props.color}`]: true,
  'r-button--loading': props.loading,
  [`r-button--${props.size || 'medium'}`]: true,
  'r-button--only-icon': props.icon,
  'r-button--block': props.block,
}))
const iconSize = computed(() => {
  return {
    small: 16,
    medium: 16,
    large: 20,
  }[props.size || 'medium']
})
const style = computed(() => {
  return {
    height: props.height ? `${props.height}px` : '',
  }
})
const ariaAttributes = computed(() => ({
  'aria-label': props.ariaLabel || undefined,
  'aria-pressed': props.ariaPressed,
  'aria-expanded': props.ariaExpanded,
  'aria-controls': props.ariaControls || undefined,
  'aria-disabled': props.disabled,
  'aria-busy': props.loading,
  'role': 'button',
}))
</script>

<template>
  <button
    v-bind="{ ...$attrs, ...ariaAttributes }"
    :class="classes"
    :disabled="disabled"
    :style="style"
    @click="$emit('click')"
    @keydown.enter="$emit('click')"
    @keydown.space.prevent="$emit('click')"
  >
    <span v-if="loading" class="sr-only">Loading</span>
    <slot name="prepend" :only-icon="props.icon">
      <Icon
        v-if="props.prependIcon"
        aria-hidden="true"
        class="r-button__prepend-icon"
        :class="{
          'r-button__prepend-icon--only': props.icon,
        }"
        :name="props.prependIcon"
        :size="iconSize"
      />
    </slot>
    <slot :disabled="disabled" />

    <slot name="append" :only-icon="props.icon">
      <Icon
        v-if="!props.icon && props.appendIcon"
        aria-hidden="true"
        class="r-button__append-icon"
        :name="props.appendIcon"
        :size="iconSize"
      />
    </slot>
  </button>
</template>
