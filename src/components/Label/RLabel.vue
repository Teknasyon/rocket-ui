<script setup lang="ts">
import { computed } from 'vue'
import type { HTMLAttributes, LabelHTMLAttributes } from 'vue'
import './label.css'

export interface LabelProps {
  /**
   * id of the label
   * @type HTMLAttributes['id']
   * @default ''
   * @example
   * <Label id="label" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   */
  id: HTMLAttributes['id']

  /**
   * for of the label
   * @type LabelHTMLAttributes['for']
   * @default ''
   * @example
   * <Label for="label" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
   */
  for: LabelHTMLAttributes['for']

  /**
   * text of the label
   * @type string | number
   * @default ''
   * @example
   * <Label text="Label" />
   */
  text: string | number

}
const props = withDefaults(defineProps<LabelProps>(), {
  id: '',
  for: '',
  text: '',
})

const componentId = computed(() => {
  return props.id || 'r-label'
})
</script>

<template>
  <label :id="componentId" class="r-label" :for="props.for">
    <slot :id="`${componentId}-slot`">
      {{ props.text }}
    </slot>
  </label>
</template>
