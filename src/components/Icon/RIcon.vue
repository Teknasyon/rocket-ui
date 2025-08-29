<script setup lang="ts">
import type { SVGAttributes } from 'vue'

// @ts-expect-error: No types for icons
import icons from '@/assets/icons/mdi.js'

export interface IProps {
  /**
   * Name of the icon
   * @type SVGAttributes['name']
   * @default ''
   * @example
   * <Icon name="icon" />
   */
  name: SVGAttributes['name']

  /**
   * Size of the icon
   * @type SVGAttributes['width'] | SVGAttributes['height']
   * @default 24
   * @example
   * <Icon size="24" />
   */
  size?: SVGAttributes['width'] | SVGAttributes['height']

  /**
   * Viewbox of the icon
   * @type SVGAttributes['viewBox']
   * @default '0 0 24 24'
   * @example
   * <Icon viewBox="0 0 24 24" />
   */
  viewBox?: SVGAttributes['viewBox']

  /**
   * Id of the Icon
   * @type string
   * @default 'r-icon'
   * @example
   * <Icon id="custom-icon" />
  id: string
   */
}
const props = withDefaults(defineProps<IProps>(), {
  name: '',
  size: 24,
  viewBox: '0 0 24 24',
  id: 'r-icon',
})
</script>

<template>
  <svg
    :id="id"
    class="r-icon"
    :height="props.size"
    :viewBox="props.viewBox"
    :width="props.size"
  >
    <path :id="`${id}-path`" :d="icons[props.name]" />
  </svg>
</template>

<style>
.r-icon {
  path {
    fill: currentColor;
  }
}
</style>
