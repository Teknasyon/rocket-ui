<script setup lang="ts">
import { ref, computed, provide, withDefaults } from 'vue';

export interface ItemGroupProps {
  modelValue: number[];
  selectedClass: string;
  disabled?: boolean;
  mandatory?: boolean;
  max?: number;
  as?: string;
}

const RItemGroupSymbol = 'rocket-ui:r-item-group';

const props = withDefaults(defineProps<ItemGroupProps>(), {
  disabled: false,
  mandatory: false,
  max: 0,
  as: 'div',
  selectedClass: '',
  modelValue: () => [] as number[],
});

const emits = defineEmits(['update:modelValue']);

const tag = ref<string>(props.as ?? 'div');

const selectedItems = ref<number[]>(props.modelValue ?? []);

const isSelected = (id: number) => {
  return selectedItems.value.includes(id);
};
provide(`${RItemGroupSymbol}:isSelected`, isSelected);

const select = (id: number, value: boolean) => {
  if (props.disabled) return;
  if (props.mandatory && selectedItems.value.length === 1 && !value) return;
  if (props.max && selectedItems.value.length >= props.max) return;
  if (value) {
    selectedItems.value = [...selectedItems.value, id];
  } else {
    selectedItems.value = selectedItems.value.filter((i) => i !== id);
  }

  emits('update:modelValue', selectedItems.value);
};
provide(`${RItemGroupSymbol}:select`, select);
</script>
<template>
  <component :is="tag">
    <slot :select="select" :isSelected="isSelected" :selected="selectedItems" />
  </component>
</template>
