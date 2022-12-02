<script setup lang="ts">
import './tooltip.css';
import {
  type Placements,
  type Triggers,
  Placement,
  update,
  Trigger,
} from './common';
import { computed, ref, watchEffect } from 'vue';
export interface IProps {
  placement?: Placements;
  text?: string;
  dark?: boolean;
  light?: boolean;
  triggers?: Triggers;
  autoHide?: boolean;
  hideDelay?: number;
  showDelay?: number;
  shown?: boolean;
  disabled?: boolean;
  offset?: number;
  padding?: number;
  outsideClick?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  placement: Placement.Top,
  text: '',
  dark: true,
  light: false,
  triggers: Trigger.Hover,
  autoHide: true,
  hideDelay: 3000,
  showDelay: 0,
  shown: false,
  disabled: false,
  offset: 0,
  padding: 0,
  outsideClick: false,
});
const emit = defineEmits(['show', 'hide']);
const trigger = ref<HTMLDivElement>(null);
const tooltip = ref<HTMLDivElement>(null);
const arrowElement = ref<HTMLDivElement>(null);
function showTooltip() {
  const { placement, offset, padding, disabled } = props;
  if (disabled) return;
  tooltip.value.style.display = 'block';
  emit('show');
  update(trigger, tooltip, arrowElement, placement, offset, padding);
  handleAutoHide();
  if (props.outsideClick) toggleOutsideClick('add');
}
function hideTooltip() {
  tooltip.value.style.display = '';
  emit('hide');
  if (props.outsideClick) toggleOutsideClick('remove');
}
const handleAutoHide = () => {
  if (props.autoHide) {
    setTimeout(() => {
      hideTooltip();
    }, props.hideDelay);
  }
};
const toggleOutsideClick = (toggle: string) => {
  if (toggle === 'add') document.addEventListener('click', hideTooltip);

  if (toggle === 'remove') document.removeEventListener('click', hideTooltip);
};
const onClick = () => {
  if (tooltip.value.style.display === '' && props.triggers === Trigger.Click) {
    showTooltip();
    return;
  }
  hideTooltip();
};
const onMouseEnter = () => {
  if (props.triggers === Trigger.Hover) showTooltip();
};
const onMouseLeave = () => {
  if (props.triggers === Trigger.Hover) hideTooltip();
};
const onMouseMove = () => {
  const { placement, offset, padding, disabled } = props;
  if (disabled) return;
  if (props.triggers === Trigger.Hover)
    update(trigger, tooltip, arrowElement, placement, offset, padding);
};
const classes = computed(() => {
  return {
    tooltip: true,
    'tooltip--dark': props.dark,
    'tooltip--light': props.light,
  };
});

watchEffect(
  () => {
    if (props.shown && props.triggers === Trigger.Manual) showTooltip();
  },
  { flush: 'post' } // this is important to avoid infinite loop & for fire on mounted
);
const animationDuration = computed(() => {
  return `${props.showDelay}ms`;
});
</script>

<template>
  <div
    ref="trigger"
    class="trigger"
    @click.stop="onClick"
    @mouseenter.stop="onMouseEnter"
    @mouseleave.stop="onMouseLeave"
    @mousemove.stop="onMouseMove"
  >
    <slot name="trigger" />
  </div>
  <div ref="tooltip" id="tooltip" :class="classes" role="tooltip">
    <slot name="content" />
    <div
      v-if="!$slots['content']"
      :class="{
        tooltip__content: true,
        'tooltip__content--dark': props.dark,
        'tooltip__content--light': props.light,
      }"
    >
      {{ props.text }}
    </div>
    <div
      v-if="!$slots['content']"
      ref="arrowElement"
      id="arrow"
      :class="{
        tooltip__arrow: true,
        'tooltip__arrow--dark': props.dark,
        'tooltip__arrow--light': props.light,
      }"
    />
  </div>
</template>
<style scoped>
.tooltip {
  animation-name: tooltip-show;
  animation-duration: v-bind('animationDuration');
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}
@keyframes tooltip-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
