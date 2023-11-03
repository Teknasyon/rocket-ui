<script setup lang="ts">
import { ref } from 'vue'
import RButton from './components/Button/RButton.vue'
import RIcon from './components/Icon/RIcon.vue'
import RTooltip from './components/Tooltip/RTooltip.vue'
import RModal from './components/Modal/RModal.vue'
import RDropdown from './components/Dropdown/RDropdown.vue'

const show = ref(false)

const showModal = ref(false)

const options = [
  { label: 'test 1', value: 1 },
  { label: 'test 2', value: 2, disabled: true },
  { label: 'test 3', value: 3 },
  { label: 'test 4', value: 4 },
  { label: 'test 5', value: 5, disabled: true },
  { label: 'test 6', value: 6 },
  { label: 'test 7', value: 7 },
  { label: 'test 8', value: 8 },
]

const selected = ref({ label: 'test 1', value: 1 })
</script>

<template>
  <div class="flex flex-col justify-between">
    <div class="mr-10">
      <RTooltip
        :auto-hide="false"
        dark
        :offset="10"
        placement="bottom"
        target="#tooltip"
        text="deneme 123"
        :triggers="['click']"
      >
        <RButton
          id="tooltip"
          block
          class="text-medium flex !h-12 font-semibold"
          variant="secondary"
        >
          <template #custom-icon>
            <RIcon
              name="mdiBell"
              size="24"
            />
          </template>
          <span>
            {{ 'page.name ' }}
          </span>
        </RButton>
        <template #content>
          test
        </template>
      </RTooltip>
    </div>

    <RButton
      @click="() => {
        showModal = true;
      }"
    >
      open modal
    </RButton>

    <RModal v-model="showModal" outside-click>
      <RDropdown :options="options" searchable />
    </RModal>

    <div class="flex w-40">
      <RDropdown
        v-model="selected"
        :close-on-select="false"
        :options="options"
        taggable
      />
      <RDropdown
        v-model="selected"
        :options="options"
      />
    </div>
  </div>
</template>
