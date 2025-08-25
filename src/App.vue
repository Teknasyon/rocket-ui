<script setup lang="ts">
import { type Component, computed, ref } from 'vue'
import RDropdownVue from './components/Dropdown/RDropdown.vue'
import RTooltip from './components/Tooltip/RTooltip.vue'

const RDropdown = RDropdownVue as Component

interface City {
  value: number
  label: string
}

const options = ref<City[]>([
  { value: 1, label: 'Istanbul' },
  { value: 2, label: 'Ankara' },
  { value: 3, label: 'Izmir' },
  { value: 4, label: 'Bursa' },
  { value: 5, label: 'Antalya' },
])

const selectedCities = ref<City[]>([])

const showPlaceholder = computed(() => {
  return selectedCities.value.length === 0
})
</script>

<template>
  <div class="p-4">
    <h1 class="mb-4 text-2xl">
      City Selection
    </h1>

    <div class="flex h-20 flex-col gap-4 overflow-y-auto border border-red-500">
      <RDropdown
        v-model="selectedCities"
        chips
        class="w-full"
        multiple
        :options="options"
        :placeholder="showPlaceholder ? 'Select a city' : ''"
      />
      <RDropdown
        v-model="selectedCities"
        chips
        class="w-full"
        multiple
        :options="options"
        :placeholder="showPlaceholder ? 'Select a city' : ''"
      />
      <RDropdown
        v-model="selectedCities"
        chips
        class="w-full"
        multiple
        :options="options"
        :placeholder="showPlaceholder ? 'Select a city' : ''"
      />
      <RDropdown
        v-model="selectedCities"
        chips
        class="w-full"
        multiple
        :options="options"
        :placeholder="showPlaceholder ? 'Select a city' : ''"
      />
    </div>

    <RTooltip
      :auto-hide="false"
      persistent
      text="test"
      :triggers="['click']"
    >
      <span class="text-blue-500">test</span>
      <template #content>
        <div class="rounded bg-red-500 p-2 text-white">
          <p class="text-sm">
            This is a tooltip content.
          </p>
          <p class="text-sm">
            Click for more information.
          </p>
          <RTooltip :auto-hide="false" text="test 2" :triggers="['click']">
            <span class="text-blue-500">test 2</span>
          </RTooltip>
        </div>
      </template>
    </RTooltip>
    <RTooltip
      :auto-hide="false"
      outside-click
      text="test 2"
      :triggers="['click']"
    >
      <span class="text-blue-500">test 2</span>
    </RTooltip>
    <RTooltip :auto-hide="false" text="test 3" :triggers="['click']">
      <span class="text-blue-500">test 3</span>
    </RTooltip>
  </div>
</template>

<style>
.r-dropdown__remaining-count-text {
  @apply text-sm text-red-500;
}
</style>
