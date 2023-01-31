<script setup lang="ts">
import { reactive } from 'vue';
import Icon from '../Icon/Icon.vue';
import './accordion.css';

export type Accordion = {
  title: string;
  content: string;
  isExpanded?: boolean;
  isDisabled?: boolean;
};

export interface AccordionProps {
  accordions: Accordion[];
  modelValue?: boolean;
}

const props = defineProps<AccordionProps>();

const emit = defineEmits(['update:modelValue']);

const accordions = reactive(
  props.accordions.map(({ title, content }, index) => ({
    title,
    content,
    isExpanded: props.accordions[index].isExpanded || false,
    isDisabled: props.accordions[index].isDisabled || false,
  }))
);

function handleAccordion(selectedIndex: number) {
  if (accordions[selectedIndex].isDisabled) return;
  accordions.forEach((_, index) => {
    accordions[index].isExpanded =
      index === selectedIndex ? !accordions[index].isExpanded : false;
  });
  emit('update:modelValue', accordions[selectedIndex].isExpanded);
}
</script>
<template>
  <div
    v-for="(accordion, index) in accordions"
    :key="index"
    :class="{
      accordion: true,
      'accordion--expanded': accordion.isExpanded,
      'accordion--disabled': accordion.isDisabled,
    }"
  >
    <div class="accordion__header" @click="handleAccordion(index)">
      <div class="accordion__title">{{ accordion.title }}</div>
      <div class="accordion__icon">
        <Icon :name="accordion.isExpanded ? 'expand_less' : 'expand_more'" />
      </div>
    </div>
    <div class="accordion__content">
      <slot />
      <template v-if="!$slots['default']">
        {{ accordion.content }}
      </template>
    </div>
  </div>
</template>
