<script setup lang="ts">
import { computed } from 'vue';
import Icon from '../Icon/RIcon.vue';
import './chip.css';

export interface Props {
  /**
   * Variant of the Chip
   * @type 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
   * @default 'primary'
   * @example
   * <Chip variant="primary" />
   */
  variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

  /**
   * Size of the Chip
   * @type 'small' | 'medium' | 'large'
   * @default 'medium'
   * @example
   * <Chip size="small" />
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Label of the Chip
   * @type string | number
   * @default 'label'
   * @example
   * <Chip label="Label" />
   */
  label?: string | number;

  /**
   * Disabled state of the Chip
   * @type boolean
   * @default false
   * @example
   * <Chip disabled />
   */
  disabled?: boolean;

  /**
   * Prepend icon of the Chip
   * @type string
   * @default ''
   * @example
   * <Chip prependIcon="icon" />
   */
  prependIcon?: string;

  /**
   * Append icon of the Chip
   * @type string
   * @default ''
   * @example
   * <Chip appendIcon="icon" />
   */
  appendIcon?: string;

  /**
   * Ghost state of the Chip
   * @type boolean
   * @default false
   * @example
   * <Chip ghost />
   */
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
const iconSize = computed<number>(() => {
  return {
    small: 20,
    medium: 24,
    large: 32,
  }[props.size || 'medium'];
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
