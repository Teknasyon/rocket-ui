<script setup lang="ts">
import './alert.css';
import { defineProps, computed, defineEmits } from 'vue';
import Icon from '../Icon/Icon.vue';
import Button from '../Button/Button.vue';

export interface Props {
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  closable?: boolean;
  closeText?: string;
}

const emit = defineEmits(['click']);
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  title: '',
  description: '',
  size: 'medium',
  closable: true,
  closeText: 'Close',
});
const classes = computed(() => {
  return {
    alert: true,
    [`alert-${props.type}`]: true,
    [`alert--${props.size}`]: true,
  };
});
const icon = computed(() => {
  return {
    success: 'CheckCircleIcon',
    error: 'XCircleIcon',
    warning: 'ExclamationCircleIcon',
    info: 'InformationCircleIcon',
  }[props.type];
});

const iconSize = computed(() => {
  return {
    small: 24,
    medium: 32,
    large: 40,
  }[props.size];
});

const onClick = () => {
  emit('click');
};
</script>
<template>
  <div :class="classes">
    <div class="icon">
      <Icon :name="icon" :size="iconSize" />
    </div>
    <div class="texts">
      <div class="texts__title">{{ props.title }}</div>
      <div class="texts__description">{{ props.description }}</div>
    </div>
    <div v-if="props.closable" class="close">
      <Button
        v-if="!$slots['close']"
        class="close__button"
        variant="primary"
        :size="props.size"
        @click="onClick"
      >
        {{ props.closeText }}
      </Button>
      <slot name="close" v-else />
    </div>
  </div>
</template>
