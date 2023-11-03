<script setup lang="ts">
import { computed } from 'vue'
import './pagination.css'

export interface PaginationProps {
  page: number
  perPage: number
  totalItems: number
  pageText?: string
  ofText?: string
  slash?: boolean
}

const props = withDefaults(defineProps<PaginationProps>(), {
  page: 1,
  perPage: 10,
  totalItems: 100,
  pageText: 'Page',
  ofText: 'of',
  slash: false,
})

const emits = defineEmits(['update:page'])

const totalPages = computed(() => Math.ceil(props.totalItems / props.perPage))

function changePage(page: number) {
  if (page < 1 || page > totalPages.value)
    return
  emits('update:page', page)
}
</script>

<template>
  <div class="r-pagination">
    <div class="r-pagination__page-info">
      <span v-if="!slash">{{ props.pageText }}</span>
      <span class="r-pagination__page-info__current-page">
        {{ props.page }}
      </span>
      <span>{{ slash ? '/' : props.ofText }}</span>
      <span class="r-pagination__page-info__total-pages">
        {{ totalPages }}
      </span>
    </div>
    <div class="r-pagination__paginator">
      <button
        class="r-pagination__paginator__prev"
        :disabled="props.page === 1"
        @click="changePage(+props.page - 1)"
      >
        <slot name="prev">
          <svg
            :class="{ 'stroke-gray-400': props.page === 1 }"
            fill="none"
            height="16"
            stroke="#323232"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </slot>
      </button>
      <input
        class="r-pagination__paginator__input"
        :max="totalPages"
        min="1"
        type="number"
        :value="props.page"
        @blur="changePage(+$event?.target?.value)"
      >
      <button
        class="r-pagination__paginator__next"
        :disabled="props.page === totalPages"
        @click="changePage(+props.page + 1)"
      >
        <slot name="next">
          <svg
            :class="{ 'stroke-gray-400': props.page === totalPages }"
            fill="none"
            height="16"
            stroke="#323232"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </slot>
      </button>
      <div class="r-pagination__paginator__total">
        / {{ totalPages }}
      </div>
    </div>
  </div>
</template>
