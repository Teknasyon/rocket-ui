<script setup lang="ts">
import './breadcrumb.css'
import { defineProps, withDefaults } from 'vue'
import RIcon from '../Icon/RIcon.vue'

export interface BreadcrumbItem {
  title: string
  to: string
  icon?: string
  onlyIcon?: boolean
}

const props = withDefaults(
  defineProps<{
    items: BreadcrumbItem[]
    seperator?: string
    id?: string
  }>(),
  {
    items: () => [] as BreadcrumbItem[],
    seperator: 'mdiChevronRight',
    id: 'r-breadcrumb',
  },
)
</script>

<template>
  <div :id="id" class="r-breadcrumb">
    <div v-for="(item, i) in props.items" :key="i" class="r-breadcrumb__item">
      <router-link :id="`${id}-link-${i}`" class="r-breadcrumb__link" :to="item.to">
        <slot name="item-icon">
          <RIcon v-if="item.icon" :name="item.icon" />
        </slot>
        <span v-if="!item.onlyIcon" :id="`${id}-title-${i}`" class="r-breadcrumb__title">{{
          item.title
        }}</span>
      </router-link>
      <slot :id="`${id}-separator-${i}`" name="custom-seperator">
        <RIcon
          v-if="i !== items.length - 1 && props.seperator"
          :id="`${id}-separator-${i}`"
          class="r-breadcrumb__separator"
          :name="props.seperator"
        />
      </slot>
    </div>
  </div>
</template>
