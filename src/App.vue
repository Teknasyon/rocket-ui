<script setup lang="ts">
import RButton from './components/Button/RButton.vue'
</script>

<template>
  <div class="p-4">
    <h1 class="mb-4 text-2xl">
      Button Variants
    </h1>

    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <RButton color="primary" variant="default">
          Primary Default
        </RButton>
        <RButton color="secondary" variant="default">
          Secondary Default
        </RButton>
        <RButton color="danger" variant="default">
          Danger Default
        </RButton>
      </div>

      <div class="flex gap-2">
        <RButton color="primary" variant="outline">
          Primary Outline
        </RButton>
        <RButton color="secondary" variant="outline">
          Secondary Outline
        </RButton>
        <RButton color="danger" variant="outline">
          Danger Outline
        </RButton>
      </div>

      <div class="flex gap-2">
        <RButton color="primary" variant="text">
          Primary Text
        </RButton>
        <RButton color="secondary" variant="text">
          Secondary Text
        </RButton>
        <RButton color="danger" variant="text">
          Danger Text
        </RButton>
      </div>

      <div class="flex gap-2">
        <RButton color="primary" variant="link">
          Primary Link
        </RButton>
        <RButton color="secondary" variant="link">
          Secondary Link
        </RButton>
        <RButton color="danger" variant="link">
          Danger Link
        </RButton>
      </div>
    </div>
  </div>
</template>

<style>
.r-dropdown__remaining-count-text {
  @apply text-sm text-red-500;
}
</style>
