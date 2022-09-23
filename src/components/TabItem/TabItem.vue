<script setup lang="ts">
import type { Tab } from '../Tabs/types';
import Icon from '../Icon/Icon.vue';
import Badge from '../Badge/Badge.vue';
import { computed } from 'vue';
import './tab-item.css';

export interface IProps {
  id: string | number;
  tab: Tab;
  variant?: 'default' | 'pill' | 'icon-only' | 'icon-pill' | 'text-only';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bgColor?: string;
  activeColor?: string;
  activeBgColor?: string;
  align?: 'left' | 'center' | 'right';
  active?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  tab: () => ({
    label: '',
    icon: '',
    disabled: false,
    iconKind: 'filled',
    badge: '',
  }),
  variant: 'default',
  color: '',
  bgColor: '',
  activeColor: '',
  size: 'medium',
  align: 'left',
  scrollable: false,
  activeTab: 0,
});
const emit = defineEmits(['click']);
const classes = computed(() => {
  const { variant, size, align, active } = props;
  return {
    'tab-item': true,
    'tab-item--active': active,
    [`tab-item--${variant}`]: true,
    [`tab-item--${size}`]: true,
    [`tab-item--${align}`]: true,
  };
});
const onClick = (id: number | string) => {
  emit('click', id);
};
</script>
<template>
  <button
    :class="classes"
    :disabled="tab.disabled"
    :aria-disabled="tab.disabled"
    @click="onClick(props.id)"
  >
    <Badge class="tab-item__badge" :content="tab.badge" over>
      <slot name="icon" />
      <Icon
        v-if="!$slots['icon'] && variant !== 'text-only'"
        class="tab-item__icon"
        :name="tab.icon"
        :kind="tab.iconKind"
      />
      <span v-if="variant !== 'icon-only'" class="tab-item__label">
        {{ tab.label }}
      </span>
    </Badge>
  </button>
</template>
