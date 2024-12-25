<script setup lang="ts">
import { reactive } from 'vue'
import Icon from '../Icon/RIcon.vue'
import './accordion.css'

export interface Accordion {
  title: string
  content: string
  open?: boolean
  disabled?: boolean
}

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
  accordions: Accordion[]

  /**
   * Allow multiple accordions to be open at the same time
   * @default false
   * @type boolean
   */
  multiple?: boolean
}

const props = defineProps<AccordionProps>()

const accordions = reactive(
  props.accordions.map(({ title, content }, index) => ({
    title,
    content,
    open: props.accordions[index].open || false,
    disabled: props.accordions[index].disabled || false,
  })),
)

function handleAccordion(selectedIndex: number) {
  if (accordions[selectedIndex].disabled)
    return

  if (props.multiple) {
    accordions[selectedIndex].open = !accordions[selectedIndex].open
    return
  }

  accordions.forEach((_, index) => {
    accordions[index].open
      = index === selectedIndex ? !accordions[index].open : false
  })
}
</script>

<template>
  <div
    v-for="(accordion, index) in accordions"
    :key="index"
    class="r-accordion"
    :class="{
      'r-accordion--disabled': accordion.disabled,
      'cursor-pointer': !accordion.open,
    }"
    :data-state="accordion.open ? 'opened' : 'closed'"
    @click="handleAccordion(index)"
  >
    <div class="r-accordion__header">
      <slot :accordion="accordion" name="title">
        <div class="r-accordion__title">
          {{ accordion.title }}
        </div>
      </slot>
      <div class="r-accordion__icon">
        <slot :item="accordion" name="icon" :open="accordion.open">
          <Icon name="mdiChevronDown" />
        </slot>
      </div>
    </div>
    <div class="r-accordion__content">
      <slot :accordion="accordion" name="content">
        <span>
          {{ accordion.content }}
        </span>
      </slot>
    </div>
  </div>
</template>
