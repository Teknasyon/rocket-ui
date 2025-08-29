<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'

export interface ItemGroupProps {
  /**
   * The value of the selected items
   * @default []
   * @model
   * @type {number[] | string[]}
   * @example
   * <RItemGroup v-model="selectedItems" />
   */
  modelValue: number[] | string[]

  /**
   * The class to apply to the selected items
   * @default ''
   * @type {string}
   * @example
   * <RItemGroup selectedClass="bg-blue-500 text-white" />
   */
  selectedClass?: string | string[]

  /**
   * Whether the item group is disabled
   * @default false
   * @type {boolean}
   * @example
   * <RItemGroup :disabled="true" />
   */
  disabled?: boolean

  /**
   * Whether the item group is mandatory
   * @default false
   * @type {boolean}
   * @example
   * ```js
   * const selected = ref<number[]>([1]);
   * ```
   * ```html
   * <RItemGroup :mandatory="true" v-model="selected" />
   * ```
   */
  mandatory?: boolean

  /**
   * The maximum number of items that can be selected
   * @default 0
   * @type {number}
   * @example
   * <RItemGroup :max="5" />
   */
  max?: number

  /**
   * The tag to use for the item group
   * @default div
   * @type {string}
   * @example
   * <RItemGroup as="ul" />
   */
  as?: string

  /**
   * Whether the item group allows multiple selections
   * @default false
   * @type {boolean}
   * @example
   * <RItemGroup :multiple="true" />
   */
  multiple?: boolean

  /**
   * Id of the ItemGroup
   * @type string
   * @default 'r-item-group'
   * @example
   * <RItemGroup id="custom-item-group" />
   */
  id?: string
}

const props = withDefaults(defineProps<ItemGroupProps>(), {
  disabled: false,
  mandatory: false,
  max: 0,
  as: 'div',
  selectedClass: '',
  modelValue: () => [] as number[],
  id: 'r-item-group',
})

const emits = defineEmits(['update:modelValue'])

const RItemGroupSymbol = 'rocket-ui:r-item-group'

const tag = ref<string>(props.as ?? 'div')

const selectedItems = ref<number[] | string[]>(props.modelValue)

const selectedClass = computed(() => props.selectedClass)
provide(`${RItemGroupSymbol}:selectedClass`, selectedClass.value)

function isSelected(id: never) {
  return selectedItems.value.includes(id) as boolean
}
provide(`${RItemGroupSymbol}:isSelected`, isSelected)

function select(id: never, value: boolean) {
  if (props.disabled)
    return
  if (props.mandatory && selectedItems.value.length === 1 && !value)
    return
  if (props.max && selectedItems.value.length === props.max && value)
    return
  if (props.multiple) {
    if (value)
      selectedItems.value.push(id)
    else
      selectedItems.value = selectedItems.value.filter(item => item !== id) as never[]
  }
  else { selectedItems.value = id ? [id] : [] }

  emits('update:modelValue', selectedItems.value)
}
provide(`${RItemGroupSymbol}:select`, select)

function isDisabled() {
  return props.disabled
}
provide(`${RItemGroupSymbol}:isDisabled`, isDisabled)

watch(() => props.modelValue, () => {
  selectedItems.value = props.modelValue
})
</script>

<template>
  <component :is="tag" :id="id">
    <slot
      :id="`${id}-slot`"
      :is-selected="isSelected"
      :select="select"
      :selected="selectedItems"
    />
  </component>
</template>
