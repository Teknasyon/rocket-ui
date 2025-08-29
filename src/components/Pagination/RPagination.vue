<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import './pagination.css'
import RDropdown from '../Dropdown/RDropdown.vue'

export interface PaginationProps {
  /**
   * @default 1
   * The current page number.
   * @type number
   */
  page: number

  /**
   * @default 10
   * The number of items per page.
   * @type number
   */
  perPage: number

  /**
   * @default 100
   * The total number of items.
   * @type number
   */
  totalItems: number

  /**
   * @default [10, 20, 50, 100]
   * The options to display in the per page dropdown.
   * @type number[]
   */
  perPageOptions?: number[]

  /**
   * @default 'Items per page:'
   * The text to display for the items per page label.
   */
  itemsPerPageText?: string

  /**
   * @default 'right'
   * The position of the pagination component.
   * @type 'left' | 'center' | 'right' | string
   */
  position?: 'left' | 'center' | 'right' | string

  /**
   * @default '1-10 of 100'
   * The text to display for the info section.
   * The text can contain the following placeholders:
   * - `{{ start }}` - The start index of the current page.
   * - `{{ end }}` - The end index of the current page.
   * - `{{ total }}` - The total number of items.
   * @type string
   */
  infoText?: string

  /**
   * Id of the Pagination
   * @type string
   * @default 'r-pagination'
   * @example
   * <Pagination id="custom-pagination" />
   */
  id?: string
}

const props = withDefaults(defineProps<PaginationProps>(), {
  page: 1,
  perPage: 10,
  totalItems: 100,
  perPageOptions: () => [10, 20, 50, 100],
  itemsPerPageText: 'Items per page:',
  position: 'right',
  infoText: '1-10 of 100',
  id: 'r-pagination',
})

const emit = defineEmits(['update:page', 'update:perPage', 'update:info'])

const perPage = ref(props.perPage || 10)

const totalPages = computed(() => Math.ceil(props.totalItems / props.perPage))

const info = computed(() => ({
  start: props.page * props.perPage - props.perPage,
  end: props.page * props.perPage,
}))

const infoText = computed(() => props.infoText || `${info.value.start + 1}-${info.value.end} of ${props.totalItems}`)

const disabledNextAndLast = computed(() => +props.page === +totalPages.value)

const disabledPrevAndFirst = computed(() => +props.page === 1)

watch(() => info.value, () => {
  emit('update:info', info.value)
})

watch(() => props.perPage, () => {
  perPage.value = props.perPage

  changePage(1)
})

function changePage(page: number) {
  const ceiled = Math.ceil(page)
  if (ceiled < 1 || ceiled > totalPages.value)
    return
  emit('update:page', ceiled)
}

function changePerPage({ value: perPage }: { value: number }) {
  if (perPage) {
    emit('update:perPage', perPage)
    return
  }

  emit('update:perPage', 10)
}
</script>

<template>
  <div :id="id" class="r-pagination" :class="[`r-pagination--${props.position}`]">
    <div :id="`${id}-paginator`" class="r-pagination__paginator">
      <div :id="`${id}-paginator-per-page`" class="r-pagination__paginator__per-page">
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
      <span :id="`${id}-paginator-info`" class="r-pagination__paginator__info">
        {{ infoText }}
      </span>
      <button
        :id="`${id}-paginator-first`"
        class="r-pagination__paginator__first"
        :disabled="disabledPrevAndFirst"
        @click="changePage(1)"
      >
        <slot :id="`${id}-paginator-first-slot`" name="first">
          <svg
            class="icon icon-tabler icon-tabler-chevron-left-pipe"
            :class="{ 'stroke-gray-400': disabledPrevAndFirst }"
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
        :id="`${id}-paginator-prev`"
        class="r-pagination__paginator__prev"
        :disabled="disabledPrevAndFirst"
        @click="changePage(+props.page - 1)"
      >
        <slot :id="`${id}-paginator-prev-slot`" name="prev">
          <svg
            class="icon icon-tabler icon-tabler-chevron-left"
            :class="{ 'stroke-gray-400': disabledPrevAndFirst }"
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
        :id="`${id}-paginator-next`"
        class="r-pagination__paginator__next"
        :disabled="disabledNextAndLast"
        @click="changePage(+props.page + 1)"
      >
        <slot :id="`${id}-paginator-next-slot`" name="next">
          <svg
            class="icon icon-tabler icon-tabler-chevron-right"
            :class="{ 'stroke-gray-400': disabledNextAndLast }"
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
        :id="`${id}-paginator-last`"
        class="r-pagination__paginator__last"
        :disabled="props.page === totalPages"
        @click="changePage(totalPages)"
      >
        <slot :id="`${id}-paginator-last-slot`" name="last">
          <svg
            class="icon icon-tabler icon-tabler-chevron-right-pipe"
            :class="{ 'stroke-gray-400': disabledNextAndLast }"
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
