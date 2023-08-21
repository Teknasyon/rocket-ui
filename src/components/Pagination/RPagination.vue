<script setup lang="ts">
import './pagination.css';
import RButton from '../Button/RButton.vue';
import RTextfield from '../Textfield/RTextfield.vue';
import { ref } from 'vue';

export interface PaginationProps {
  page: number;
  totalPages: number;
  pageText?: string;
  ofText?: string;
  slash?: boolean;
  prevIcon?: string;
  nextIcon?: string;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  page: 1,
  totalPages: 20,
  pageText: 'Page',
  ofText: 'of',
  slash: false,
  prevIcon: 'mdiChevronLeft',
  nextIcon: 'mdiChevronRight',
});

const emits = defineEmits(['update:page']);

const changePage = (page: number) => {
  if (page < 1 || page > props.totalPages) return;
  emits('update:page', page);
};
</script>

<template>
  <div class="r-pagination">
    <div class="r-pagination__page-info">
      <span v-if="!slash">{{ props.pageText }}</span>
      <span class="r-pagination__page-info__current-page">
        {{ props.page }}
      </span>
      {{ slash ? '/' : props.ofText }}
      <span class="r-pagination__page-info__total-pages">
        {{ totalPages }}
      </span>
    </div>
    <div class="r-pagination__paginator">
      <RButton
        class="r-pagination__paginator__prev"
        variant="outline"
        only-icon
        :prepend-icon="prevIcon"
        :disabled="props.page === 1"
        @click="changePage(props.page - 1)"
      />
      <RTextfield
        v-model="props.page"
        class="r-pagination__paginator__input"
        type="number"
        min="1"
        :max="totalPages"
        @input="changePage($event?.value)"
      />
      <RButton
        class="r-pagination__paginator__next"
        variant="outline"
        only-icon
        :prepend-icon="nextIcon"
        :disabled="props.page === totalPages"
        @click="changePage(props.page + 1)"
      />
    </div>
  </div>
</template>
