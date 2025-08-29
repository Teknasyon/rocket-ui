<script setup lang="ts">
import './badge.css'
import { computed } from 'vue'

export interface BadgeProps {
  /**
   * Variant of the Badge
   * @type { 'primary' | 'success' | 'warning' | 'error' | 'neutral' }
   * @default 'primary'
   * @example
   * <Badge variant="primary" />
   */
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral'

  /**
   * Placement of the Badge
   * @type { 'right' | 'bottom' | 'left' }
   * @default 'right'
   * @example
   * <Badge placement="right" />
   */
  placement?: 'right' | 'bottom' | 'left'

  /**
   * Overlap the Badge
   * @type { boolean }
   * @default false
   * @example
   * <Badge overlap />
   */
  overlap?: boolean

  /**
   * Show the Badge on hover
   * @type { boolean }
   * @default false
   * @example
   * <Badge hover />
   */
  hover?: boolean

  /**
   * Show the Badge outside
   * @type { boolean }
   * @default false
   * @example
   * <Badge outside />
   */
  outside?: boolean

  /**
   * Show the Badge animation
   * @type { boolean }
   * @default false
   * @example
   * <Badge animation />
   */
  animation?: boolean

  /**
   * Class of the Badge
   * @type { string | string[] }
   * @example
   * <Badge class="text-red-500" />
   */
  class?: string | string[]

  /**
   * Content of the Badge
   * @type { string }
   * @example
   * <Badge content="99+" />
   */
  content?: string

  /**
   * Class of the content of the Badge
   * @type { string | string[] }
   * @example
   * <Badge contentClass="text-red-500" />
   */
  contentClass?: string | string[]

  /**
   * Wrapper class of the Badge
   * @type { string | string[] }
   * @example
   * <Badge wrapperClass="text-red-500" />
   */
  wrapperClass?: string | string[]

  /**
   * Id of the Badge
   * @type { string }
   * @example
   * <Badge id="custom-badge" />
   */
  id?: string
}
const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  placement: 'right',
  overlap: false,
  hover: false,
  content: '',
  outside: false,
  animation: false,
  class: '',
  contentClass: '',
  wrapperClass: '',
  id: 'r-badge',
})
defineEmits(['click'])
const classes = computed(() => {
  return {
    'r-badge': true,
    [`r-badge--content ${props.contentClass}`]: props.content,
    [`r-badge--overlap-${props.placement}`]: props.overlap,
    [`r-badge--${props.placement}`]: props.placement,
    [`r-badge--outside-${props.placement}`]: props.outside,
    'r-badge--hover': props.hover,
    [`r-badge--${props.variant}`]: props.variant,
    [props.class as string]: props.class,
  }
})
</script>

<template>
  <div :id="id" class="r-badge-wrapper group" :class="[props.wrapperClass]">
    <span :id="`${id}-badge`" :class="[{ 'animate-ping-2': props.animation }, classes]" />
    <span :id="`${id}-content`" :class="classes" v-html="props.content" />
    <slot :id="`${id}-slot`" />
  </div>
</template>
