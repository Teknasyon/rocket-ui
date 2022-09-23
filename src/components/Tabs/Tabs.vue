<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue';
import './tabs.css';
import type { Tab } from './types';
import TabItem from '../TabItem/TabItem.vue';

export interface IProps {
  tabs: Tab[];
  variant?: 'default' | 'pill' | 'icon-only' | 'icon-pill' | 'text-only';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bgColor?: string;
  activeColor?: string;
  activeBgColor?: string;
  align?: 'left' | 'center' | 'right';
  scrollable?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  tabs: () => [],
  variant: 'default',
  color: '',
  activeColor: '',
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
        :tab="tab"
        :color="props.color"
        :activeColor="props.activeColor"
        :active="activeTab === index"
        :variant="props.variant"
        :size="props.size"
        :align="props.align"
        @click="onClick"
      />
    </div>
  </div>
  <div class="tab-content">
    <slot name="tab" :activeTab="activeTab" />
  </div>
</template>
