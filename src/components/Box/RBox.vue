<script setup lang="ts">
import { computed, type CSSProperties, type HTMLAttributes } from 'vue';
import '../../index.css';
export interface IProps {
  /**
   * The HTML tag to use for the root element.
   * @type HTMLAttributes['is']
   * @default 'div'
   * @example
   * <Box is="span" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is
   */
  is: HTMLAttributes['is'];

  /**
   * Shorthand for `width` style prop
   * @type CSSProperties["width"]
   * @default 'auto'
   * @example
   * <Box width="100%" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/width
   */
  width?: CSSProperties['width'];

  /**
   * Shorthand for `height` style prop
   * @type CSSProperties["height"]
   * @default 'auto'
   * @example
   * <Box height="100%" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/height
   */
  height?: CSSProperties['height'];

  /**
   * Shorthand for `minWidth` style prop
   * @type CSSProperties["minWidth"]
   * @example
   * <Box minWidth="100%" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
   */
  minWidth?: CSSProperties['minWidth'];

  /**
   * Shorthand for `minHeight` style prop
   * @type CSSProperties["minHeight"]
   * @example
   * <Box minHeight="100%" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
   */
  minHeight?: CSSProperties['minHeight'];

  /**
   * Shorthand for `maxWidth` style prop
   * @type CSSProperties["maxWidth"]
   * @example
   * <Box maxWidth="100%" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
   */
  maxWidth?: CSSProperties['maxWidth'];

  /**
   * Shorthand for `maxHeight` style prop
   * @type CSSProperties["maxHeight"]
   * @example
   * <Box maxHeight="100%" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
   */
  maxHeight?: CSSProperties['maxHeight'];

  /**
   * Shorthand for `display` style prop
   * @type CSSProperties["display"]
   * @default 'block'
   * @example
   * <Box display="flex" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/display
   */
  display?: CSSProperties['display'];
}
const props = defineProps<IProps>();
const styles = computed(() => ({
  display: props.display || 'block',
  width: props.width,
  height: props.height,
  minWidth: props.minWidth,
  minHeight: props.minHeight,
  maxWidth: props.maxWidth,
}));
const as = computed(() => props.is || 'div');
</script>

<template>
  <component :is="as" class="box" :style="styles">
    <slot />
  </component>
</template>
