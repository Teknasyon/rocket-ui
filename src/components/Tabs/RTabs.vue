<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import './tabs.css';
import TabItem from '../TabItem/RTabItem.vue';
import type { Tab } from './types';

export interface IProps {
  /**
   * Tabs of the tabs
   * @type {Tab[]}
   * @default []
   * @example
   * <Tabs :tabs="[]" />
   */
  tabs?: Tab[]

  /**
   * Block state of the tabs
   * @type {boolean}
   * @default false
   * @example
   * <Tabs block />
   */
  block?: boolean

  /**
   * Active tab of the tabs
   * @type {number | string}
   * @default tabs[0].id
   * @example
   * <Tabs v-model="activeTab" />
   */
  modelValue?: number | string

  /**
   * Tile state of the tabs
   * @type {boolean}
   * @default false
   * @example
   * <Tabs tile />
   */
  tile?: boolean

  /**
   * Scrollable state of the tabs
   * @type {boolean}
   * @default false
   * @example
   * <Tabs scrollable />
   */
  scrollable?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  tabs: () => [],
  block: false,
  modelValue: '',
  tile: false,
  scrollable: false,
});
const emits = defineEmits(['update:modelValue', 'click:icon']);
const activeTab = ref(props.modelValue || props.tabs[0].id);

const tabsClasses = computed(() => {
  return {
    'r-tabs': true,
    'r-tabs--block': props.block,
    'r-tabs--tile': props.tile,
    'r-tabs--scrollable': props.scrollable,
  };
});

watch(
  () => activeTab.value,
  () => {
    emits('update:modelValue', activeTab.value);
  }
);

function handleIconClick() {
  emits('click:icon');
}
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
        :append-icon="tab.appendIcon"
        :block="block"
        :disabled="tab.disabled"
        :label="tab.label"
        :prepend-icon="tab.prependIcon"
        :tile="tile"
        :variant="tab.variant"
        @click:icon="handleIconClick"
      />
    </slot>
  </div>
</template>
