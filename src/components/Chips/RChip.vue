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

  /**
   * Closable state of the Chip
   * @type boolean
   * @default false
   * @example
   * <Chip closable />
   */
  closable?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  label: 'label',
  disabled: false,
  prependIcon: '',
  appendIcon: '',
  ghost: false,
  closable: false,
});
const emit = defineEmits(['click:chip', 'click:close']);
const classes = computed<object>(() => {
  return {
    chip: true,
    'chip--disabled': props.disabled,
    [`chip__${props.variant}`]: props.variant,
    [`chip__${props.variant}--ghost`]: props.ghost,
  };
});

const clickChip = (e: MouseEvent) => {
  if (props.closable) e.stopPropagation();
  if (props.disabled) return;
  emit('click:chip', e);
};
const clickClose = (e: MouseEvent) => {
  if (props.disabled || !props.closable) return;
  e.stopPropagation();
  emit('click:close', e);
};
</script>
<template>
  <div :class="classes">
    <div class="chip__content" @click="clickChip($event)">
      <slot name="prepend">
        <Icon
          v-if="props.prependIcon"
          :aria-disabled="props.disabled"
          class="chip__content__prepend-icon"
          :name="props.prependIcon"
          :size="12"
        />
      </slot>
      <span class="chip__content__label">{{ props.label }}</span>
    </div>
    <slot name="append">
      <Icon
        v-if="props.appendIcon"
        :aria-disabled="props.disabled"
        class="chip__content__append-icon"
        :name="props.appendIcon"
        :size="12"
        @click="clickClose($event)"
      />
    </slot>
  </div>
</template>
