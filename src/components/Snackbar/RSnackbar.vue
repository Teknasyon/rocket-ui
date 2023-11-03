<script setup lang="ts">
import { computed, watch } from 'vue'
import Icon from '../Icon/RIcon.vue'
import './snackbar.css'

export interface IProps {
  /**
   * Show of the snackbar
   * @type boolean
   * @default false
   * @example
   * <Snackbar show />
   */
  modelValue: boolean
  /**
   * Text of the snackbar
   * @type string
   * @default ''
   * @example
   * <Snackbar text="Snackbar" />
   */
  text: string

  /**
   * Show close of the snackbar
   * @type boolean
   * @default false
   * @example
   * <Snackbar closable />
   */
  closable?: boolean

  /**
   * Set the snackbar slide from left otherwise slide from right
   * @type boolean
   * @default false
   * @example
   * <Snackbar left />
   */
  left?: boolean

  /**
   * Timeout of the snackbar. <br />
   * If timeout is 0, the snackbar will not close automatically
   * @type number
   * @default 0
   * @example
   * <Snackbar timeout="1000" />
   */
  timeout?: number

  /**
   * Variant of the snackbar
   * @type 'success' | 'error' | 'warning' | 'info'
   * @default 'info'
   * @example
   * <Snackbar variant="success" />
   */
  variant?: 'success' | 'error' | 'warning' | 'info'

  /**
   * Set the snackbar slide on top otherwise slide on bottom
   * @type boolean
   * @default false
   * @example
   * <Snackbar top />
   */
  top?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  text: '',
  closable: false,
  left: false,
  modelValue: false,
  timeout: 0,
})

const emit = defineEmits(['action', 'update:modelValue'])

watch(
  () => props.modelValue,
  () => {
    if (props.timeout > 0 && props.modelValue) {
      setTimeout(() => {
        emit('update:modelValue', false)
      }, props.timeout)
    }
  },
  {
    immediate: true,
  },
)

const classes = computed(() => {
  return {
    'r-snackbar': true,
    [`r-snackbar--${props.variant}`]: true,
    [props.left ? 'r-snackbar__left' : 'r-snackbar__right']: true,
    [props.modelValue ? 'r-snackbar--shown' : 'r-snackbar--hidden']: true,
    [props.top ? 'r-snackbar__top' : 'r-snackbar__bottom']: true,
  }
})

const variantIcons = computed(() => {
  return {
    success: 'mdiCheckCircle',
    error: 'mdiAlertCircle',
    warning: 'mdiAlert',
    info: 'mdiInformation',
  }[props.variant || 'info']
})
</script>

<template>
  <div :class="classes">
    <slot>
      <Icon v-if="props.variant" class="r-snackbar__icon" :name="variantIcons" />
    </slot>

    <div class="r-snackbar__text">
      {{ props.text }}
    </div>

    <slot name="action" />

    <div v-if="props.closable" class="r-snackbar__close">
      <slot name="close">
        <Icon name="mdiClose" :size="16" @click.stop="$emit('update:modelValue', false)" />
      </slot>
    </div>
  </div>
</template>
