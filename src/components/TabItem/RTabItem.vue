<script setup lang="ts">
import Icon from '../Icon/RIcon.vue';
import { computed, type HTMLAttributes, type ButtonHTMLAttributes } from 'vue';
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
  disabled?: ButtonHTMLAttributes['disabled'];

  /**
   * Active state of the tab item
   * @type HTMLAttributes['aria-selected']
   * @default false
   * @example
   * <TabItem active />
   */
  active?: HTMLAttributes['aria-selected'];

  /**
   * Model value of the tab item
   * @type string | number
   * @default ''
   * @example
   * <TabItem v-model="model" />
   */
  modelValue?: string | number;
}
const props = withDefaults(defineProps<IProps>(), {
  label: '',
  variant: TabItemVariants.DEFAULT,
  icon: '',
  disabled: false,
  active: false,
  modelValue: '',
});

const emit = defineEmits(['update:modelValue']);

const classes = computed(() => {
  return {
    'tab-item': true,
    [`tab-item--${props.variant}`]: true,
  };
});

/**
 * @description Fires when the tab is clicked
 * @param {id} id - The id of the tab
 * @returns {void}
 */
function onClick(id: number | string) {
  emit('update:modelValue', id);
}
</script>
<template>
  <button
    :aria-disabled="props.disabled"
    :aria-selected="props.active"
    :class="classes"
    :disabled="props.disabled"
    @click="onClick(props.id)"
  >
    <Icon
      v-if="!$slots['icon'] && variant !== TabItemVariants.TEXT_ONLY"
      class="tab-item__icon"
      :name="props.icon"
    />
    <slot v-else name="custom-icon" />

    <span v-if="variant !== TabItemVariants.ICON_ONLY" class="tab-item__label">
      {{ props.label }}
    </span>
  </button>
</template>
