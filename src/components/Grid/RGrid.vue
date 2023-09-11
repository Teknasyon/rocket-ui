<script setup lang="ts">
import { computed, type CSSProperties } from 'vue';
import '../../index.css';
export interface IProps {
  /**
   * Shorthand prop for `gridTemplateColumns`
   * @type CSSProperties["gridTemplateColumns"]
   * @default 'none'
   * @example
   * <Grid templateColumns="repeat(12, 1fr)" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
   */
  templateColumns?: CSSProperties['gridTemplateColumns'];

  /**
   * Shorthand prop for `gridGap`
   * @type CSSProperties["gridGap"]
   * @default '0'
   * @example
   * <Grid gap="0" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  gap?: CSSProperties['gap'];

  /**
   * Shorthand prop for `rowGap`
   * @type CSSProperties["rowGap"]
   * @default '1rem'
   * @example
   * <Grid rowGap="1rem" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
   */
  rowGap?: CSSProperties['rowGap'];

  /**
   * Shorthand prop for `columnGap`
   * @type CSSProperties["columnGap"]
   * @default '1rem'
   * @example
   * <Grid columnGap="1rem" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
   */
  columnGap?: CSSProperties['columnGap'];

  /**
   * Shorthand prop for `gridAutoFlow`
   * @type CSSProperties["gridAutoFlow"]
   * @default 'row'
   * @example
   * <Grid autoFlow="row" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
   */
  autoFlow?: CSSProperties['gridAutoFlow'];

  /**
   * Shorthand prop for `gridAutoRows`
   * @type CSSProperties["gridAutoRows"]
   * @default 'auto'
   * @example
   * <Grid autoRows="auto" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
   */
  autoRows?: CSSProperties['gridAutoRows'];

  /**
   * Shorthand prop for `gridAutoColumns`
   * @type CSSProperties["gridAutoColumns"]
   * @default 'auto'
   * @example
   * <Grid autoColumns="auto" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
   */
  autoColumns?: CSSProperties['gridAutoColumns'];

  /**
   * Shorthand prop for `gridTemplateRows`
   * @type CSSProperties["gridTemplateRows"]
   * @default 'repeat(12, 1fr)'
   * @example
   * <Grid templateRows="repeat(12, 1fr)" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
   */
  templateRows?: CSSProperties['gridTemplateRows'];

  /**
   * Shorthand prop for `gridTemplateAreas`
   * @type CSSProperties["gridTemplateAreas"]
   * @default 'repeat(12, 1fr)'
   * @example
   * <Grid templateAreas="repeat(12, 1fr)" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
   */
  templateAreas?: CSSProperties['gridTemplateAreas'];

  /**
   * Shorthand prop for `gridColumn`
   * @type CSSProperties["gridColumn"]
   * @example
   * <Grid column="1 / 3" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   */
  column?: CSSProperties['gridColumn'];

  /**
   * Shorthand prop for `gridRow`
   * @type CSSProperties["gridRow"]
   * @example
   * <Grid row="1 / 3" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   */
  row?: CSSProperties['gridRow'];
}
const props = defineProps<IProps>();

const gridStyle = computed(() => ({
  gridTemplateColumns: props.templateColumns,
  gridGap: props.gap,
  rowGap: props.rowGap,
  columnGap: props.columnGap,
  gridAutoFlow: props.autoFlow,
  gridAutoRows: props.autoRows,
  gridAutoColumns: props.autoColumns,
  gridTemplateRows: props.templateRows,
  gridTemplateAreas: props.templateAreas,
  gridColumn: props.column,
  gridRow: props.row,
}));
</script>
<template>
  <div class="grid" :style="gridStyle">
    <slot />
  </div>
</template>
<style scoped>
.grid {
  display: grid;
}
</style>
