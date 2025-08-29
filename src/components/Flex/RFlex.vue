<script setup lang="ts">
import { type CSSProperties, computed } from 'vue'
import '../../index.css'

export interface IProps {
  /**
   * Shorthand for `alignItems` style prop
   * @type CSSProperties["alignItems"]
   * @example
   * <Flex align="center" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  align?: CSSProperties['alignItems']

  /**
   * Shorthand for `justifyContent` style prop
   * @type CSSProperties["justifyContent"]
   * @example
   * <Flex justify="center" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justify?: CSSProperties['justifyContent']

  /**
   * Shorthand for `flexWrap` style prop
   * @type CSSProperties["flexWrap"]
   * @example
   * <Flex wrap="wrap" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  wrap?: CSSProperties['flexWrap']

  /**
   * Shorthand for `flexDirection` style prop
   * @type CSSProperties["flexDirection"]
   * @example
   * <Flex direction="column" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  direction?: CSSProperties['flexDirection']

  /**
   * Shorthand for `flexBasis` style prop
   * @type CSSProperties["flexBasis"]
   * @example
   * <Flex basis="50%" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
   */
  basis?: CSSProperties['flexBasis']

  /**
   * Shorthand for `flexGrow` style prop
   * @type CSSProperties["flexGrow"]
   * @example
   * <Flex grow="1" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
   */
  grow?: CSSProperties['flexGrow']

  /**
   * Shorthand for `flexShrink` style prop
   * @type CSSProperties["flexShrink"]
   * @example
   * <Flex shrink="1" />
   * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
   */
  shrink?: CSSProperties['flexShrink']

  /**
   * Id of the Flex
   * @type string
   * @default 'r-flex'
   * @example
   * <Flex id="custom-flex" />
   */
  id?: string
}

const props = defineProps<IProps>()
const styles = computed(() => ({
  alignItems: props.align,
  justifyContent: props.justify,
  flexWrap: props.wrap,
  flexDirection: props.direction,
  flexBasis: props.basis,
  flexGrow: props.grow,
  flexShrink: props.shrink,
}))
</script>

<template>
  <div :id="id" class="flex" :style="styles">
    <slot :id="`${id}-slot`" />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
</style>
