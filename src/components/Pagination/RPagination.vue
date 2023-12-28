<script setup lang="ts">
import { computed, ref } from 'vue'
import './pagination.css'
import RDropdown from '../Dropdown/RDropdown.vue'

export interface PaginationProps {
  page: number
  perPage: number
  totalItems: number
  infoText: string
  perPageOptions: number[]
}

const props = withDefaults(defineProps<PaginationProps>(), {
  page: 1,
  perPage: 10,
  totalItems: 100,
  infoText: '',
  perPageOptions: () => [10, 20, 50, 100],
})

const emit = defineEmits(['update:page', 'update:perPage'])

const perPage = ref(props.perPage || 10)

const totalPages = computed(() => Math.ceil(props.totalItems / props.perPage))

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
  <div class="r-pagination">
    <div class="r-pagination__page-info">
      <span v-if="props.infoText">{{ props.infoText }}</span>
    </div>
    <div class="r-pagination__paginator">
      <div class="r-pagination__per-page">
        <RDropdown
          v-model="perPage"
          class="w-24"
          hide-details
          hide-option-check-icon
          :options="props.perPageOptions"
          @update:modelValue="changePerPage"
        />
      </div>
      <button
        class="r-pagination__paginator__first"
        :disabled="props.page === 1"
        @click="changePage(+props.page - 1)"
      >
        <slot name="first">
          <svg
            class="icon icon-tabler icon-tabler-arrow-bar-to-left"
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
            <path d="M10 12l10 0" />
            <path d="M10 12l4 4" />
            <path d="M10 12l4 -4" />
            <path d="M4 4l0 16" />
          </svg>
        </slot>
      </button>
      <button
        class="r-pagination__paginator__prev"
        :disabled="props.page === 1"
        @click="changePage(1)"
      >
        <slot name="prev">
          <svg
            class="icon icon-tabler icon-tabler-arrow-left"
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
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
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
            class="icon icon-tabler icon-tabler-arrow-right"
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
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
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
            class="icon icon-tabler icon-tabler-arrow-bar-to-right"
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
            <path d="M14 12l-10 0" />
            <path d="M14 12l-4 4" />
            <path d="M14 12l-4 -4" />
            <path d="M20 4l0 16" />
          </svg>
        </slot>
      </button>
      <div class="r-pagination__paginator__total">
        <!-- / {{ totalPages }} -->
      </div>
    </div>
  </div>
</template>
