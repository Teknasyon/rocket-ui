<script setup lang="ts">
import { computed, inject, withDefaults } from 'vue';

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
   * Whether the item is disabled
   * @default false
   * @type boolean
   * @example
   * <RItem :disabled="true" />
   */
  disabled?: boolean

  /**
   * The class to apply to the selected item
   * @default ''
   * @type string
   * @example
   * <RItem selectedClass="bg-blue-500 text-white" />
   */
  selectedClass?: string
}

const props = withDefaults(defineProps<ItemProps>(), {
  disabled: false,
  selectedClass: '',
  value: null,
});

const RItemGroupSymbol = 'rocket-ui:r-item-group';

const isSelected = inject(`${RItemGroupSymbol}:isSelected`) as (
  id: number
) => boolean;

const classes = inject(`${RItemGroupSymbol}:selectedClass`, '') as string;
const selectedClass = computed(() => {
  return isSelected(props.value) && [classes, props.selectedClass];
});

const select = inject(`${RItemGroupSymbol}:select`) as (
  id: number,
  value: boolean
) => void;

function handleToggle() {
  if (props.disabled)
    return;
  select(props.value as number, !isSelected(props.value as number));
}

function handleSelect() {
  if (props.disabled)
    return;
  select(props.value as number, true);
}
</script>

<template>
  <slot
    :disabled="props.disabled"
    :is-selected="isSelected(props.value as number)"
    :select="handleSelect"
    :selected-class="selectedClass"
    :toggle="handleToggle"
    :value="props.value"
  />
</template>
