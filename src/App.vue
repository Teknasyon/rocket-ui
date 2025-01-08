<script setup lang="ts">
import { type Component, computed, ref } from 'vue'
import RDropdownVue from './components/Dropdown/RDropdown.vue'

const RDropdown = RDropdownVue as Component

interface City {
  value: number
  label: string
}

const options = ref<City[]>([
  { value: 1, label: 'İstanbul' },
  { value: 2, label: 'Ankara' },
  { value: 3, label: 'İzmir' },
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
      Şehir Seçimi
    </h1>

    <RDropdown
      v-model="selectedCities"
      chips
      class="w-96"
      multiple
      :options="options"
      :placeholder="showPlaceholder ? 'Şehir seçiniz' : ''"
    />
  </div>
</template>

<style>
.r-dropdown__remaining-count-text {
  @apply text-sm text-red-500;
}
</style>
