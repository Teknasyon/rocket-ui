<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import './pagination.css'
import RDropdown from '../Dropdown/RDropdown.vue'

export interface PaginationProps {
  page: number
  perPage: number
  totalItems: number
  perPageOptions?: number[]
  itemsPerPageText?: string
  position?: 'left' | 'center' | 'right' | string
  infoText?: string
}

const props = withDefaults(defineProps<PaginationProps>(), {
  page: 1,
  perPage: 10,
  totalItems: 100,
  perPageOptions: () => [10, 20, 50, 100],
  itemsPerPageText: 'Items per page:',
  position: 'right',
  infoText: '1-10 of 100',
})

const emit = defineEmits(['update:page', 'update:perPage', 'update:info'])

const perPage = ref(props.perPage || 10)

const totalPages = computed(() => Math.ceil(props.totalItems / props.perPage))

const info = computed(() => ({
  start: props.page * props.perPage - props.perPage,
  end: props.page * props.perPage,
}))

watch(() => info.value, () => {
  emit('update:info', info.value)
})

function changePage(page: number) {
  if (page < 1 || page > totalPages.value)
    return
  emit('update:page', page)
}

function changePerPage({ value: perPage }: { value: number }) {
  emit('update:perPage', perPage)
}
</script>

<template>
  <div class="r-pagination" :class="[`r-pagination--${props.position}`]">
    <div class="r-pagination__paginator">
      <div class="r-pagination__paginator__per-page">
        <span>{{ props.itemsPerPageText }}</span>
        <RDropdown
          v-model="perPage"
          class="w-24"
          hide-details
          hide-option-check-icon
          :options="props.perPageOptions"
          @update:modelValue="changePerPage"
        />
      </div>
      <span class="r-pagination__paginator__info">
        {{ props.infoText }}
      </span>
      <button
        class="r-pagination__paginator__first"
        :disabled="props.page === 1"
        @click="changePage(1)"
      >
        <slot name="first">
          <svg
            class="icon icon-tabler icon-tabler-chevron-left-pipe"
            :class="{ 'stroke-gray-400': props.page === 1 }"
            fill="none"
            height="20"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M7 6v12" />
            <path d="M18 6l-6 6l6 6" />
          </svg>
        </slot>
      </button>
      <button
        class="r-pagination__paginator__prev"
        :disabled="props.page === 1"
        @click="changePage(+props.page - 1)"
      >
        <slot name="prev">
          <svg
            class="icon icon-tabler icon-tabler-chevron-left"
            :class="{ 'stroke-gray-400': props.page === 1 }"
            fill="none"
            height="20"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </slot>
      </button>
      <button
        class="r-pagination__paginator__next"
        :disabled="props.page === totalPages"
        @click="changePage(+props.page + 1)"
      >
        <slot name="next">
          <svg
            class="icon icon-tabler icon-tabler-chevron-right"
            :class="{ 'stroke-gray-400': props.page === totalPages }"
            fill="none"
            height="20"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </slot>
      </button>
      <button
        class="r-pagination__paginator__last"
        :disabled="props.page === totalPages"
        @click="changePage(props.totalItems / props.perPage)"
      >
        <slot name="last">
          <svg
            class="icon icon-tabler icon-tabler-chevron-right-pipe"
            :class="{ 'stroke-gray-400': props.page === totalPages }"
            fill="none"
            height="20"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M6 6l6 6l-6 6" />
            <path d="M17 5v13" />
          </svg>
        </slot>
      </button>
    </div>
  </div>
</template>
