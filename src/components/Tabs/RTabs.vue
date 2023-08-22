<script setup lang="ts">
import { computed, ref, watch } from 'vue';
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

  /**
   * Block state of the tabs
   * @type boolean
   * @default false
   * @example
   * <Tabs block />
   */
  block?: boolean;

  /**
   * Active tab of the tabs
   * @type number | string
   * @default tabs[0].id
   * @example
   * <Tabs v-model="activeTab" />
   */
  modelValue?: number | string;
}

const props = withDefaults(defineProps<IProps>(), {
  tabs: () => [],
  scrollable: false,
});
const emits = defineEmits(['update:modelValue']);
const activeTab = ref(props.modelValue || props.tabs[0].id);

const tabsClasses = computed(() => {
  return {
    tabs: true,
    'tabs--scrollable': props.scrollable,
    'tabs--block': props.block,
  };
});

watch(
  () => activeTab.value,
  () => {
    emits('update:modelValue', activeTab.value);
  }
);
</script>
<template>
  <div :class="tabsClasses">
    <slot>
      <TabItem
        v-for="(tab, index) in props.tabs"
        :id="tab.id"
        :key="index"
        v-model="activeTab"
        :active="index === activeTab"
        :disabled="tab.disabled"
        :icon="tab.icon"
        :label="tab.label"
        :variant="tab.variant"
      />
    </slot>
  </div>
</template>
