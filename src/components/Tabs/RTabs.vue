<script setup lang="ts">
import { computed, ref } from 'vue';
import './tabs.css';
import type { Tab } from './types';
import TabItem from '../TabItem/RTabItem.vue';

export interface IProps {
  /**
   * Tabs of the tabs
   * @type Tab[]
   * @default []
   * @example
   * <Tabs :tabs="[]" />
   */
  tabs: Tab[];

  /**
   * Scrollable state of the tabs
   * @type boolean
   * @default false
   * @example
   * <Tabs scrollable />
   */
  scrollable?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  tabs: () => [],
  scrollable: false,
});
const activeTab = ref(0);

const tabsClasses = computed(() => {
  return {
    tabs: true,
    'tabs--scrollable': props.scrollable,
  };
});
</script>
<template>
  <div class="tabs-wrapper">
    <div :class="tabsClasses">
      <TabItem
        v-for="(tab, index) in props.tabs"
        :id="tab.id"
        :key="index"
        v-model="activeTab"
        :active="index === activeTab"
        :disabled="tab.disabled"
        :icon="tab.icon"
        :label="tab.label"
      />
    </div>
  </div>
  <div class="tab-content">
    <slot :activeTab="activeTab" name="tab" />
  </div>
</template>
