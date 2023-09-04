<script setup lang="ts">
import { inject, withDefaults } from 'vue';

export interface ItemProps {
  /**
   * The value of the item
   * @default null
   * @type any
   * @example
   * <RItem :value="1" />
   */
  value: any;

  /**
   * Whether the item is disabled
   * @default false
   * @type boolean
   * @example
   * <RItem :disabled="true" />
   */
  disabled?: boolean;

  /**
   * The class to apply to the selected item
   * @default ''
   * @type string
   * @example
   * <RItem selectedClass="bg-blue-500 text-white" />
   */
  selectedClass?: string;
}

const RItemGroupSymbol = 'rocket-ui:r-item-group';

const props = withDefaults(defineProps<ItemProps>(), {
  disabled: false,
  selectedClass: '',
  value: null,
});

const isSelected = inject(`${RItemGroupSymbol}:isSelected`) as (
  id: number
) => boolean;
const select = inject(`${RItemGroupSymbol}:select`) as (
  id: number,
  value: boolean
) => void;
const handleToggle = () => {
  if (props.disabled) return;
  select(props.value as number, !isSelected(props.value as number));
};
const handleSelect = () => {
  if (props.disabled) return;
  select(props.value as number, true);
};
</script>
<template>
  <slot
    :isSelected="isSelected(props.value as number)"
    :value="props.value"
    :selectedClass="props.selectedClass"
    :disabled="props.disabled"
    :select="handleSelect"
    :toggle="handleToggle"
  />
</template>
