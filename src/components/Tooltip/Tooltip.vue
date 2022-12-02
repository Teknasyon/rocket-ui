<script setup lang="ts">
import './tooltip.css';
import {
  type Placements,
  type Triggers,
  Placement,
  update,
  Trigger,
} from './common';
import { computed, onMounted, ref, watchEffect } from 'vue';
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
  update(trigger, tooltip, arrowElement, placement, offset, padding);
  if (props.outsideClick) {
    document.addEventListener('click', hideTooltip);
  }
}
function hideTooltip() {
  tooltip.value.style.display = '';
  if (props.outsideClick) {
    document.removeEventListener('click', hideTooltip);
  }
}
const onClick = () => {
  if (tooltip.value.style.display === '' && props.triggers === Trigger.Click) {
    showTooltip();
    emit('show');
    return;
  }
  hideTooltip();
  emit('hide');
};
const onMouseEnter = () => {
  if (props.triggers === Trigger.Hover) {
    showTooltip();
    emit('show');
  }
};
const onMouseLeave = () => {
  if (props.triggers === Trigger.Hover) {
    hideTooltip();
    emit('hide');
  }
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
onMounted(() => {
  if (props.autoHide && props.triggers === Trigger.Click) {
    setTimeout(() => {
      hideTooltip();
    }, props.hideDelay);
  }
});
watchEffect(
  () => {
    if (props.shown && props.triggers === Trigger.Manual) {
      showTooltip();
      emit('show');
    }
    if (!props.shown && props.triggers === Trigger.Manual) {
      hideTooltip();
      emit('hide');
    }
  },
  { flush: 'post' } // this is important to avoid infinite loop & for fire on mounted
);
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
