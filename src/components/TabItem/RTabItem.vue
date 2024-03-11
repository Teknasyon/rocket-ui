<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../Icon/RIcon.vue'
import './tab-item.css'
import { type TabItemVariant, TabItemVariants } from './common'

export interface IProps {
  /**
   * Id of the tab item
   * @type string | number
   * @default ''
   * @example
   * <TabItem id="1" />
   */
  id: string | number

  /**
   * Variant of the tab item
   * @type TabItemVariant
   * @default TabItemVariants.DEFAULT
   * @example
   * <TabItem variant="default" />
   */
  variant?: TabItemVariant

  /**
   * Label of the tab item
   * @type string
   * @default ''
   * @example
   * <TabItem label="Label" />
   */
  label?: string

  /**
   * prependIcon of the tab item
   * @type string
   * @default ''
   * @example
   * <TabItem prependIcon="prependIcon" />
   */
  prependIcon?: string

  /**
   * appendIcon of the tab item
   * @type string
   * @default ''
   * @example
   * <TabItem appendIcon="appendIcon" />
   */
  appendIcon?: string

  /**
   * Disabled state of the tab item
   * @type ButtonHTMLAttributes['disabled']
   * @default false
   * @example
   * <TabItem disabled />
   */
  disabled?: boolean

  /**
   * Model value of the tab item
   * @type string | number
   * @default ''
   * @example
   * <TabItem v-model="model" />
   */
  modelValue?: string | number

  /**
   * Tile state of the tab item
   * @type boolean
   * @default false
   * @example
   * <TabItem tile />
   */
  tile?: boolean

  /**
   * Block state of the tab item
   * @type boolean
   * @default false
   * @example
   * <TabItem block />
   */
  block?: boolean

  /**
   * Color of the tab item
   * @type string
   * @default ''
   * @example
   * <TabItem color="" />
   */
  color?: string
}
const props = withDefaults(defineProps<IProps>(), {
  label: '',
  variant: TabItemVariants.DEFAULT,
  prependIcon: '',
  appendIcon: '',
  disabled: false,
  modelValue: '',
  tile: false,
  block: false,
  color: '',
})

const emit = defineEmits(['update:modelValue', 'click:icon'])

const classes = computed(() => {
  return {
    'r-tab-item': true,
    [`r-tab-item--${props.variant}`]: true,
    'r-tab-item--tile': props.tile,
    'r-tab-item--block': props.block,
  }
})

const style = computed(() => {
  return {
    color: props.color,
  }
})

/**
 * @description Fires when the tab is clicked
 * @param {id} id - The id of the tab
 * @returns {void}
 */
function handleTab(id: number | string): void {
  emit('update:modelValue', id)
}
</script>

<template>
  <button
    :aria-disabled="props.disabled"
    :aria-selected="props.modelValue === props.id"
    :class="classes"
    :disabled="props.disabled"
    :style="style"
    @click.stop="handleTab(props.id)"
  >
    <slot :active="props.modelValue === props.id" name="prepend">
      <Icon
        v-if="props.variant !== TabItemVariants.TEXT && props.prependIcon"
        class="r-tab-item__prepend-icon"
        :name="props.prependIcon"
        :size="16"
      />
    </slot>

    <span v-if="props.variant !== TabItemVariants.ICON">
      <slot>
        {{ props.label }}
      </slot>
    </span>

    <slot :active="props.modelValue === props.id" name="append">
      <Icon
        v-if="props.variant !== TabItemVariants.TEXT && props.appendIcon"
        class="r-tab-item__append-icon"
        :name="props.appendIcon"
        :size="16"
      />
    </slot>
  </button>
</template>
