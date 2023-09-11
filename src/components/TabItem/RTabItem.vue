<script setup lang="ts">
import Icon from '../Icon/RIcon.vue';
import { computed } from 'vue';
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
   * prependIcon of the tab item
   * @type string
   * @default ''
   * @example
   * <TabItem prependIcon="prependIcon" />
   */
  prependIcon?: string;

  /**
   * appendIcon of the tab item
   * @type string
   * @default ''
   * @example
   * <TabItem appendIcon="appendIcon" />
   */
  appendIcon?: string;

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

  /**
   * Color of the tab item
   * @type string
   * @default ''
   * @example
   * <TabItem color="" />
   */
  color?: string;
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
});

const emit = defineEmits(['update:modelValue', 'click:icon']);

const classes = computed(() => {
  return {
    'tab-item': true,
    [`tab-item--${props.variant}`]: true,
    'tab-item--tile': props.tile,
    'tab-item--block': props.block,
  };
});

const style = computed(() => {
  return {
    color: props.color,
  };
});

/**
 * @description Fires when the tab is clicked
 * @param {id} id - The id of the tab
 * @returns {void}
 */
function handleTab(id: number | string): void {
  emit('update:modelValue', id);
}

/**
 * @description Fires when the icon is clicked
 * @returns {void}
 */
function handleIconClick(): void {
  emit('click:icon');
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
    <slot name="prepend">
      <Icon
        v-if="props.variant !== TabItemVariants.TEXT && props.prependIcon"
        class="tab-item__prepend-icon"
        :name="props.prependIcon"
        :size="16"
      />
    </slot>

    <span v-if="props.variant !== TabItemVariants.ICON" class="tab-item__label">
      {{ props.label }}
    </span>

    <slot name="append">
      <Icon
        v-if="props.variant !== TabItemVariants.TEXT && props.appendIcon"
        class="tab-item__append-icon"
        :name="props.appendIcon"
        :size="16"
        @click.stop="handleIconClick"
      />
    </slot>
  </button>
</template>
