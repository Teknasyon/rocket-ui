<script setup lang="ts">
import './breadcrumb.css';
import { defineProps, withDefaults } from 'vue';
import RIcon from '../Icon/RIcon.vue';
export interface BreadcrumbItem {
  title: string;
  to: string;
  icon?: string;
  onlyIcon?: boolean;
}

const props = withDefaults(
  defineProps<{
    items: BreadcrumbItem[];
    seperator?: string;
  }>(),
  {
    items: () => [] as BreadcrumbItem[],
    seperator: 'mdiChevronRight',
  }
);
</script>
<template>
  <div class="r-breadcrumb">
    <div v-for="(item, i) in props.items" :key="i" class="r-breadcrumb__item">
      <router-link class="r-breadcrumb__link" :to="item.to">
        <slot name="item-icon">
          <RIcon v-if="item.icon" :name="item.icon" />
        </slot>
        <span v-if="!item.onlyIcon" class="r-breadcrumb__title">{{
          item.title
        }}</span>
      </router-link>
      <slot name="custom-seperator">
        <RIcon
          v-if="i !== items.length - 1 && props.seperator"
          class="r-breadcrumb__separator"
          :name="props.seperator"
        />
      </slot>
    </div>
  </div>
</template>
