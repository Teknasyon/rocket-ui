<script setup lang="ts">
import { type Component, computed, ref } from 'vue';
import RDropdownVue from './components/Dropdown/RDropdown.vue';
import RTooltip from './components/Tooltip/RTooltip.vue';

const RDropdown = RDropdownVue as Component;

interface City {
  value: number;
  label: string;
}

const options = ref<City[]>([
  { value: 1, label: 'İstanbul' },
  { value: 2, label: 'Ankara' },
  { value: 3, label: 'İzmir' },
  { value: 4, label: 'Bursa' },
  { value: 5, label: 'Antalya' },
]);

const selectedCities = ref<City[]>([]);

const showPlaceholder = computed(() => {
  return selectedCities.value.length === 0;
});
</script>

<template>
  <div class="p-4">
    <h1 class="mb-4 text-2xl">Şehir Seçimi</h1>

    <RDropdown
      v-model="selectedCities"
      chips
      class="w-96"
      multiple
      :options="options"
      :placeholder="showPlaceholder ? 'Şehir seçiniz' : ''"
    />

    <RTooltip :auto-hide="false" persistent text="test" triggers="click">
      <span class="text-blue-500">test</span>
      <template #content>
        <div class="p-2 bg-red-500 text-white rounded">
          <p class="text-sm">Bu bir tooltip içeriğidir.</p>
          <p class="text-sm">Daha fazla bilgi için tıklayın.</p>
          <RTooltip :auto-hide="false" text="test 2" triggers="click">
            <span class="text-blue-500">test 2</span>
          </RTooltip>
        </div>
      </template>
    </RTooltip>
    <RTooltip :auto-hide="false" text="test 2" triggers="click" outsideClick>
      <span class="text-blue-500">test 2</span>
    </RTooltip>
    <RTooltip :auto-hide="false" text="test 3" triggers="click">
      <span class="text-blue-500">test 3</span>
    </RTooltip>
  </div>
</template>

<style>
.r-dropdown__remaining-count-text {
  @apply text-sm text-red-500;
}
</style>
