<script setup lang="ts">
import Icon from '../Icon/Icon.vue';
import { computed } from 'vue';
import './tab-item.css';
import { TabItemVariants, type TabItemVariant } from './common';
export interface IProps {
  id: string | number;
  variant?: TabItemVariant;
  label?: string;
  icon?: string;
  disabled?: boolean;
  active?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  label: '',
  variant: TabItemVariants.DEFAULT,
  icon: '',
  disabled: false,
  active: false,
});

const emit = defineEmits(['select']);
/**
 * Computed
 * @description - Returns the class for the tab item
 */
const classes = computed(() => {
  const { variant, active } = props;
  return {
    'tab-item': true,
    [`tab-item--${variant}`]: true,
  };
});

/**
 * @description Fires when the tab is clicked
 * @param {id} id - The id of the tab
 * @returns {void}
 */
function onClick(id: number | string) {
  emit('select', id);
}
</script>
<template>
  <button
    :class="classes"
    :disabled="props.disabled"
    :aria-disabled="props.disabled"
    :aria-selected="props.active"
    @click="onClick(props.id)"
  >
    <slot name="icon" />
    <Icon
      v-if="!$slots['icon'] && variant !== TabItemVariants.TEXT_ONLY"
      :name="props.icon"
      class="tab-item__icon"
      size="16"
    />
    <span v-if="variant !== TabItemVariants.ICON_ONLY" class="tab-item__label">
      {{ props.label }}
    </span>
  </button>
</template>
