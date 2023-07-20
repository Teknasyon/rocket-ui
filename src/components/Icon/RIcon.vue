<script setup lang="ts">
import 'material-icons/iconfont/material-icons.css';
import { computed, type CSSProperties } from 'vue';

export interface IProps {
  /**
   * Name of the icon
   * @type string
   * @default ''
   * @example
   * <Icon name="icon" />
   */
  name: string;

  /**
   * Kind of the icon
   * @type 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone'
   * @default 'round'
   * @example
   * <Icon kind="filled" />
   */
  kind?: string | 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';

  /**
   * Font size of the icon
   * @type number
   * @default 24
   * @example
   * <Icon fontSize="24" />
   */
  fontSize?: CSSProperties['fontSize'];

  /**
   * Color of the icon
   * @type string
   * @default ''
   * @example
   * <Icon color="red" />
   */
  color?: CSSProperties['color'];

  /**
   * Font weight of the icon
   * @type string
   * @default 'normal'
   * @example
   * <Icon fontWeight="bold" />
   */
  fontWeight?: CSSProperties['fontWeight'];
}
const props = withDefaults(defineProps<IProps>(), {
  name: '',
  kind: 'round',
  fontSize: 24,
  color: '',
  fontWeight: 'normal',
});

const styles = computed(() => {
  return {
    fontSize: `${props.fontSize}px`,
    fontWeight: props.fontWeight,
    color: props.color,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

const classes = computed(() => {
  if (props.kind === 'filled') {
    return 'material-icons';
  }
  return `material-icons-${props.kind}`;
});
</script>
<template>
  <span :class="classes" :style="styles">{{ props.name }}</span>
</template>
