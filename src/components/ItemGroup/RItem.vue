<script setup lang="ts">
import { computed, inject, watch, withDefaults } from 'vue'

export interface ItemProps {
  /**
   * The value of the item
   * @default null
   * @type any
   * @example
   * <RItem :value="1" />
   */
  value: any

  /**
   * The class to apply to the selected item
   * @default ''
   * @type string
   * @example
   * <RItem selectedClass="bg-blue-500 text-white" />
   */
  selectedClass?: string | string[]
}

const props = withDefaults(defineProps<ItemProps>(), {
  disabled: false,
  selectedClass: '',
  value: null,
})

const RItemGroupSymbol = 'rocket-ui:r-item-group'

const isSelected = inject(`${RItemGroupSymbol}:isSelected`) as (
  id: number
) => boolean

const classes = inject(`${RItemGroupSymbol}:selectedClass`, '') as string

const select = inject(`${RItemGroupSymbol}:select`) as (
  id: number,
  value: boolean
) => void

const isDisabled = inject(`${RItemGroupSymbol}:isDisabled`) as (
  id: number
) => boolean

const selectedClass = computed(() => {
  return isSelected(props.value) && [classes, props.selectedClass]
})

function handleToggle() {
  if (props.disabled)
    return
  select(props.value as number, !isSelected(props.value as number))
}

function handleSelect() {
  if (props.disabled)
    return
  select(props.value as number, true)
}
</script>

<template>
  <slot
    :disabled="isDisabled(props.value as number)"
    :is-selected="isSelected(props.value as number)"
    :select="handleSelect"
    :selected-class="selectedClass"
    :toggle="handleToggle"
  />
</template>
