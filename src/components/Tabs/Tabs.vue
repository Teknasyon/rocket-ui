<script setup lang="ts">
import { computed, ref } from 'vue';
import './tabs.css';
import type { Tab } from './types';
import TabItem from '../TabItem/TabItem.vue';

export interface IProps {
  tabs: Tab[];
  scrollable?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  tabs: () => [],
  scrollable: false,
});

const tabsClasses = computed(() => {
  return {
    tabs: true,
    'tabs--scrollable': props.scrollable,
  };
});
const activeTab = ref(0);
const emit = defineEmits(['select']);
const onSelect = (index: number) => {
  activeTab.value = index;
  emit('select', index);
};
</script>
<template>
  <div class="tabs-wrapper">
    <div :class="tabsClasses">
      <TabItem
        v-for="(tab, index) in props.tabs"
        :key="index"
        :id="tab.id"
        :label="tab.label"
        :icon="tab.icon"
        :disabled="tab.disabled"
        :active="index === activeTab"
        @select="onSelect"
      />
    </div>
  </div>
  <div class="tab-content">
    <slot name="tab" :activeTab="activeTab" />
  </div>
</template>
