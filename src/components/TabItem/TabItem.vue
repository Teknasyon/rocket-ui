<script setup lang="ts">
import Icon from '../Icon/Icon.vue';
import { computed } from 'vue';
import './tab-item.css';

export interface IProps {
  id: string | number;
  label?: string;
  icon?: string;
  disabled?: boolean;
  iconKind?: string;
  variant?: 'default' | 'icon-only' | 'text-only';
  pill?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bgColor?: string;
  activeColor?: string;
  activeBgColor?: string;
  borderColor?: string;
  align?: 'left' | 'center' | 'right';
  active?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  label: '',
  icon: '',
  disabled: false,
  iconKind: 'filled',
  variant: 'default',
  pill: false,
  color: '',
  bgColor: '',
  activeColor: '',
  activeBgColor: '',
  borderColor: '',
  size: 'medium',
  align: 'left',
  scrollable: false,
  activeTab: 0,
});
const emit = defineEmits(['click']);
/**
 * Computed
 * @description - Returns the class for the tab item
 */
const classes = computed(() => {
  const { variant, size, align, active, pill } = props;
  return {
    'tab-item': true,
    'tab-item--active': active,
    'tab-item--pill': pill,
    [`tab-item--${variant}`]: true,
    [`tab-item--${size}`]: true,
    [`tab-item--${align}`]: true,
  };
});
console.log(classes);

/**
 * @description Fires when the tab is clicked
 * @param {id} id - The id of the tab
 * @returns {void}
 */
function onClick(id: number | string) {
  emit('click', id);
}
/**
 * @description Returns the custom styles of the tab item
 * @returns {Object} The custom styles of the tab item
 */
const styles = computed(() => {
  const { color, bgColor, activeColor, activeBgColor, active, borderColor } =
    props;
  return {
    color: active ? activeColor : color,
    backgroundColor: active ? activeBgColor : bgColor,
    borderColor: borderColor,
  };
});
const attrs = computed(() => {
  const { disabled, active: hello } = props;
  return {
    disabled,
    hello,
  };
});
</script>
<template>
  <button
    :class="classes"
    :disabled="props.disabled"
    :aria-disabled="props.disabled"
    :aria-selected="props.active"
    :style="styles"
    @click="onClick(props.id)"
  >
    <slot name="icon" />
    <Icon
      v-if="!$slots['icon'] && variant !== 'text-only'"
      class="tab-item__icon"
      :name="props.icon"
      :kind="props.iconKind"
    />
    <span v-if="variant !== 'icon-only'" class="tab-item__label">
      {{ props.label }}
    </span>
  </button>
</template>
