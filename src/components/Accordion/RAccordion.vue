<script setup lang="ts">
import { reactive } from 'vue';
import Icon from '../Icon/RIcon.vue';
import './accordion.css';

export type Accordion = {
  title: string;
  content: string;
  open?: boolean;
  disabled?: boolean;
};

export interface AccordionProps {
  /**
   * Accordion list
   * @default []
   * @type Accordion[]
   * @example
   * ```html
   * <r-accordion :accordions="[
   *  { title: 'Accordion 1', content: 'Content 1' },
   *  ]" />
   * ```
   */
  accordions: Accordion[];
}

const props = defineProps<AccordionProps>();

const accordions = reactive(
  props.accordions.map(({ title, content }, index) => ({
    title,
    content,
    open: props.accordions[index].open || false,
    disabled: props.accordions[index].disabled || false,
  }))
);

function handleAccordion(selectedIndex: number) {
  if (accordions[selectedIndex].disabled) return;
  accordions.forEach((_, index) => {
    accordions[index].open =
      index === selectedIndex ? !accordions[index].open : false;
  });
}
</script>
<template>
  <div
    v-for="(accordion, index) in accordions"
    :key="index"
    :class="{
      accordion: true,
      'accordion--opened': accordion.open,
      'accordion--disabled': accordion.disabled,
    }"
  >
    <div class="accordion__header" @click="handleAccordion(index)">
      <div class="accordion__title">{{ accordion.title }}</div>
      <div class="accordion__icon">
        <Icon :name="accordion.open ? 'expand_less' : 'expand_more'" />
      </div>
    </div>
    <div class="accordion__content">
      <span>
        {{ accordion.content }}
      </span>
    </div>
  </div>
</template>
