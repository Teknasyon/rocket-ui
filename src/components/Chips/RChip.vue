<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../Icon/RIcon.vue'
import './chip.css'

export interface Props {
  /**
   * Variant of the Chip
   * @type 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
   * @default 'primary'
   * @example
   * <Chip variant="primary" />
   */
  variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'

  /**
   * Label of the Chip
   * @type string | number
   * @default 'label'
   * @example
   * <Chip label="Label" />
   */
  label?: string | number

  /**
   * Disabled state of the Chip
   * @type boolean
   * @default false
   * @example
   * <Chip disabled />
   */
  disabled?: boolean

  /**
   * Prepend icon of the Chip
   * @type string
   * @default ''
   * @example
   * <Chip prependIcon="icon" />
   */
  prependIcon?: string

  /**
   * Append icon of the Chip
   * @type string
   * @default ''
   * @example
   * <Chip appendIcon="icon" />
   */
  appendIcon?: string

  /**
   * Ghost state of the Chip
   * @type boolean
   * @default false
   * @example
   * <Chip ghost />
   */
  ghost?: boolean

  /**
   * Clearable state of the Chip
   * @type boolean
   * @default false
   * @example
   * <Chip clearable />
   */
  clearable?: boolean

  /**
   * No wrap state of the Chip
   * @type boolean
   * @default false
   * @example
   * <Chip noWrap />
   */
  noWrap?: boolean

  /**
   * Id of the Chip
   * @type string
   * @default 'r-chip'
   * @example
   * <Chip id="custom-chip" />
   */
  id?: string
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  label: 'label',
  disabled: false,
  prependIcon: '',
  appendIcon: '',
  ghost: false,
  clearable: false,
  noWrap: false,
  id: 'r-chip',
})
const emit = defineEmits(['click:chip', 'click:close'])
const classes = computed<object>(() => {
  return {
    'r-chip': true,
    'r-chip--disabled': props.disabled,
    [`r-chip__${props.variant}`]: props.variant,
    [`r-chip__${props.variant}--ghost`]: props.ghost,
    'r-chip--clearable': props.clearable,
  }
})

function clickChip(e: MouseEvent) {
  if (props.clearable)
    e.stopPropagation()
  if (props.disabled)
    return
  emit('click:chip', e)
}
function clickClose(e: MouseEvent) {
  if (props.disabled || !props.clearable)
    return
  e.stopPropagation()
  emit('click:close', e)
}

const appendIcon = computed(() => {
  if (props.clearable)
    return 'mdiClose'
  return props.appendIcon
})
</script>

<template>
  <div :id="id" :class="classes">
    <div :id="`${id}-content`" class="r-chip__content" @click="clickChip($event)">
      <slot :disabled="props.disabled" name="prepend">
        <Icon
          v-if="props.prependIcon"
          :id="`${id}-prepend-icon`"
          :aria-disabled="props.disabled"
          class="r-chip__content__prepend-icon"
          :name="props.prependIcon"
          :size="12"
        />
      </slot>
      <span
        :id="`${id}`"
        class="r-chip__content__label"
        :class="[props.noWrap && 'whitespace-nowrap']"
      >
        {{ props.label }}
      </span>
    </div>
    <slot :disabled="props.disabled" name="append">
      <Icon
        v-if="appendIcon"
        :id="`${id}-append-icon`"
        :aria-disabled="props.disabled"
        class="r-chip__content__append-icon"
        :name="appendIcon"
        :size="12"
        @click="clickClose($event)"
      />
    </slot>
  </div>
</template>
