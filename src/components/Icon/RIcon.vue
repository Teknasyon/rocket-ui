<script setup lang="ts">
import { computed, type SVGAttributes } from 'vue';
// @ts-ignore
import icons from '@/assets/icons/mdi.js';

export interface IProps {
  /**
   * Name of the icon
   * @type SVGAttributes['name']
   * @default ''
   * @example
   * <Icon name="icon" />
   */
  name: SVGAttributes['name'];

  /**
   * Size of the icon
   * @type SVGAttributes['width'] | SVGAttributes['height']
   * @default 24
   * @example
   * <Icon size="24" />
   */
  size?: SVGAttributes['width'] | SVGAttributes['height'];

  /**
   * Viewbox of the icon
   * @type SVGAttributes['viewBox']
   * @default '0 0 24 24'
   * @example
   * <Icon viewBox="0 0 24 24" />
   */
  viewBox?: SVGAttributes['viewBox'];

  /**
   * Flip the icon
   * @type 'horizontal' | 'vertical' | 'both' | 'none'
   * @default 'none'
   * @example
   * <Icon flip="horizontal" />
   */
  flip?: 'horizontal' | 'vertical' | 'both' | 'none';

  /**
   * Rotate the icon
   * @type SVGAttributes['rotate']
   * @default 0
   * @example
   * <Icon rotate="90" />
   */
  rotate?: SVGAttributes['rotate'];
}
const props = withDefaults(defineProps<IProps>(), {
  name: '',
  size: 24,
  viewBox: '0 0 24 24',
  flip: 'none',
  rotate: 0,
});

const styles = computed(() => {
  return {
    '--sx': ['both', 'horizontal'].includes(props.flip) ? '-1' : '1',
    '--sy': ['both', 'vertical'].includes(props.flip) ? '-1' : '1',
    '--r': props.rotate + 'deg',
  };
});
</script>
<template>
  <svg
    :width="props.size"
    :height="props.size"
    :viewBox="props.viewBox"
    :style="styles"
  >
    <path :d="icons[props.name]" />
  </svg>
</template>
<style>
svg {
  transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));
}
path {
  fill: currentColor;
}
</style>
