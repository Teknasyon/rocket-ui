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
    <div class="r-breadcrumb__item" v-for="(item, i) in props.items" :key="i">
      <router-link :to="item.to" class="r-breadcrumb__link">
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
          :name="props.seperator"
          class="r-breadcrumb__separator"
        />
      </slot>
    </div>
  </div>
</template>
