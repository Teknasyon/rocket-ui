<script setup lang="ts">
import { Tooltip } from 'floating-vue';
import { reactive } from 'vue';
import './tooltip.css';
import 'floating-vue/dist/style.css';
export interface Props {
  theme?: 'dropdown' | 'menu' | 'tooltip';
  popperClass?: string;
  placement?:
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';
  content?: string;
  strategy?: 'fixed' | 'absolute';
  triggers?: ['hover' | 'click' | 'focus' | 'touch'];
  delay?: number;
  shown?: boolean;
  distance?: number;
  skidding?: number;
  arrowPadding?: number;
  container?: HTMLElement;
  autoHide?: boolean;
  disabled?: boolean;
  positioningDisabled?: boolean;
  autoSize?: boolean | 'min' | 'max';
  flip?: boolean;
  shift?: boolean;
  handleResize?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(['show', 'hide', 'dispose', 'resize']);
const state = reactive({
  visible: false,
});
const show = () => {
  state.visible = true;
  emit('show');
};
const hide = () => {
  state.visible = false;
  emit('hide');
};
const dispose = () => {
  emit('dispose');
};
const resize = () => {
  emit('resize');
};
</script>
<template>
  <div style="display: flex">
    <Tooltip
      v-bind="props"
      v-model:shown="state.visible"
      @show="show"
      @hide="hide"
      @dispose="dispose"
      @resize="resize"
    >
      <slot />
      <template #popper>
        <slot v-if="$slots.contentSlot && !props.content" name="contentSlot" />
        <div v-else>{{ props.content }}</div>
      </template>
    </Tooltip>
  </div>
</template>
<style></style>
