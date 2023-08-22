<script setup lang="ts">
import Icon from '../Icon/RIcon.vue';
import { computed, type ButtonHTMLAttributes } from 'vue';
import './tab-item.css';
import { TabItemVariants, type TabItemVariant } from './common';
export interface IProps {
  /**
   * Id of the tab item
   * @type string | number
   * @default ''
   * @example
   * <TabItem id="1" />
   */
  id: string | number;

  /**
   * Variant of the tab item
   * @type TabItemVariant
   * @default TabItemVariants.DEFAULT
   * @example
   * <TabItem variant="default" />
   */
  variant?: TabItemVariant;

  /**
   * Label of the tab item
   * @type string
   * @default ''
   * @example
   * <TabItem label="Label" />
   */
  label?: string;

  /**
   * Icon of the tab item
   * @type string
   * @default ''
   * @example
   * <TabItem icon="icon" />
   */
  icon?: string;

  /**
   * Disabled state of the tab item
   * @type ButtonHTMLAttributes['disabled']
   * @default false
   * @example
   * <TabItem disabled />
   */
  disabled?: boolean;

  /**
   * Model value of the tab item
   * @type string | number
   * @default ''
   * @example
   * <TabItem v-model="model" />
   */
  modelValue?: string | number;

  /**
   * Tile state of the tab item
   * @type boolean
   * @default false
   * @example
   * <TabItem tile />
   */
  tile?: boolean;

  /**
   * Block state of the tab item
   * @type boolean
   * @default false
   * @example
   * <TabItem block />
   */
  block?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  label: '',
  variant: TabItemVariants.DEFAULT,
  icon: '',
  disabled: false,
  modelValue: '',
  tile: false,
  block: false,
});

const emit = defineEmits(['update:modelValue']);

const classes = computed(() => {
  return {
    'tab-item': true,
    [`tab-item--${props.variant}`]: true,
    'tab-item--tile': props.tile,
    'tab-item--block': props.block,
  };
});

/**
 * @description Fires when the tab is clicked
 * @param {id} id - The id of the tab
 * @returns {void}
 */
function onClick(id: number | string): void {
  emit('update:modelValue', id);
}
</script>
<template>
  <button
    :aria-disabled="props.disabled"
    :aria-selected="props.modelValue === props.id"
    :class="classes"
    :disabled="props.disabled"
    @click="onClick(props.id)"
  >
    <slot name="custom-icon">
      <Icon
        v-if="props.variant !== TabItemVariants.TEXT"
        class="tab-item__icon"
        :name="props.icon"
        :size="16"
      />
    </slot>

    <span v-if="props.variant !== TabItemVariants.ICON" class="tab-item__label">
      {{ props.label }}
    </span>
  </button>
</template>
