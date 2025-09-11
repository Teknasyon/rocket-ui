<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import './tabs.css'
import TabItem from '../TabItem/RTabItem.vue'
import type { Tab } from './types'

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

  /**
   * Id of the Tabs
   * @type string
   * @default 'r-tabs'
   * @example
   * <Tabs id="custom-tabs" />
   */
  id?: string
}

const props = withDefaults(defineProps<IProps>(), {
  tabs: () => [],
  block: false,
  modelValue: '',
  tile: false,
  scrollable: false,
  id: 'r-tabs',
})
const emits = defineEmits(['update:modelValue'])
const activeTab = ref(props.modelValue || props.tabs[0].id)

const tabsClasses = computed(() => {
  return {
    'r-tabs': true,
    'r-tabs--tile': props.tile,

  }
})

watch(
  () => activeTab.value,
  () => {
    emits('update:modelValue', activeTab.value)
  },
)

watch(
  () => props.modelValue,
  () => {
    activeTab.value = props.modelValue
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div
    :id="id"
    :class="tabsClasses"
  >
    <div
      :id="`${id}-tabs`"
      class=" flex"
      :class="[{
        'w-full': props.block,
        'overflow-x-auto': props.scrollable,
        'gap-0.5': props.tile,
      }]"
    >
      <slot :id="`${id}-slot`" :active-tab="activeTab">
        <TabItem
          v-for="(tab, index) in props.tabs"
          :id="`${id}-tab-${tab.index}`"
          :key="index"
          v-model="activeTab"
          :append-icon="tab.appendIcon"
          :block="block"
          :disabled="tab.disabled"
          :label="tab.label"
          :prepend-icon="tab.prependIcon"
          :tile="tile"
          :variant="tab.variant"
        />
      </slot>
    </div>
  </div>
</template>
