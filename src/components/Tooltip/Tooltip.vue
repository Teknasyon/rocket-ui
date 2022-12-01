<script setup lang="ts">
import './tooltip.css';
import {
  type Placements,
  type Triggers,
  Placement,
  update,
  Trigger,
} from './common';
import { computed, onMounted, ref } from 'vue';
export interface IProps {
  placement?: Placements;
  text?: string;
  dark?: boolean;
  light?: boolean;
  triggers?: Triggers;
  autoHide?: boolean;
  delay?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  placement: Placement.Top,
  text: '',
  dark: true,
  light: false,
  triggers: Trigger.Hover,
  autoHide: true,
  delay: 3000,
});
const trigger = ref<HTMLDivElement>(null);
const tooltip = ref<HTMLDivElement>(null);
const arrowElement = ref<HTMLDivElement>(null);

function showTooltip() {
  tooltip.value.style.display = 'block';
  update(trigger, tooltip, arrowElement, props.placement);
}

function hideTooltip() {
  tooltip.value.style.display = '';
}

const onClick = () => {
  if (tooltip.value.style.display === '' && props.triggers === Trigger.Click) {
    showTooltip();
  } else {
    hideTooltip();
  }
};
const onMouseEnter = () => {
  if (props.triggers === Trigger.Hover) showTooltip();
};
const onMouseLeave = () => {
  if (props.triggers === Trigger.Hover) hideTooltip();
};
const onFocus = () => {
  if (props.triggers === Trigger.Focus) showTooltip();
};
const onBlur = () => {
  if (props.triggers === Trigger.Focus) hideTooltip();
};
const onMouseMove = () => {
  if (props.triggers === Trigger.Hover)
    update(trigger, tooltip, arrowElement, props.placement);
};
const classes = computed(() => {
  return {
    tooltip: true,
    'tooltip--dark': props.dark,
    'tooltip--light': props.light,
  };
});
onMounted(() => {
  if (props.autoHide && props.triggers === Trigger.Click) {
    setTimeout(() => {
      hideTooltip();
    }, props.delay);
  }
});
</script>

<template>
  <div
    ref="trigger"
    style="background: none; border-radius: 100%; display: inline-block"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousemove="onMouseMove"
    @focus="onFocus"
    @blur="onBlur"
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
