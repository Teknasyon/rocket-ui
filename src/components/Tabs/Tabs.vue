<script setup lang="ts">
import { computed, ref } from 'vue';
import './tabs.css';
import type { Tab } from './types';
import TabItem from '../TabItem/TabItem.vue';

export interface IProps {
  tabs: Tab[];
  variant?: 'default' | 'icon-only' | 'text-only';
  pill?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bgColor?: string;
  activeColor?: string;
  activeBgColor?: string;
  borderColor?: string;
  align?: 'left' | 'center' | 'right';
  scrollable?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  tabs: () => [],
  variant: 'default',
  pill: false,
  color: '',
  activeColor: '',
  bgColor: '',
  activeBgColor: '',
  borderColor: '',
  size: 'medium',
  align: 'left',
  scrollable: false,
  activeTab: 0,
});

const tabsClasses = computed(() => {
  return {
    tabs: true,
    [`tabs--${props.variant}`]: true,
    'tabs--scrollable': props.scrollable,
    'tabs--pill': props.pill,
  };
});
const activeTab = ref(0);
const emit = defineEmits(['click']);
const onClick = (index: number) => {
  activeTab.value = index;
  emit('click', index);
};
</script>
<template>
  <div class="tabs-wrapper">
    <div :class="tabsClasses">
      <TabItem
        v-for="(tab, index) in props.tabs"
        :key="index"
        :id="index"
        :label="tab.label"
        :icon="tab.icon"
        :disabled="tab.disabled"
        :iconKind="tab.iconKind"
        :variant="props.variant"
        :pill="props.pill"
        :size="props.size"
        :color="props.color"
        :bgColor="props.bgColor"
        :activeColor="props.activeColor"
        :activeBgColor="props.activeBgColor"
        :borderColor="props.borderColor"
        :align="props.align"
        :active="index === activeTab"
        @click="onClick"
      />
    </div>
  </div>
  <div class="tab-content">
    <slot name="tab" :activeTab="activeTab" />
  </div>
</template>
