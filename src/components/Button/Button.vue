<script setup lang="ts">
import './button.css';
import { computed } from 'vue';
import { PlusCircleIcon as PlusCircleOutline } from '@heroicons/vue/outline';
import { PlusCircleIcon as PlusCircleSolid } from '@heroicons/vue/solid';
export interface Props {
  role?: string;
  label?: string;
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  backgroundColor?: string;
}
const props = defineProps<Props>();
const emit = defineEmits(['click']);
const classes = computed(() => ({
  button: true,
  [`button--${props.role || 'primary'}`]: true,
  [`button--${props.size || 'medium'}`]: true,
}));
const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
const Icon = computed(() => {
  return props.icon?.includes('Outline') ? PlusCircleOutline : PlusCircleSolid;
});
const onClick = () => {
  emit('click');
};
</script>
<template>
  <button
    :type="type || 'button'"
    :class="classes"
    :style="style"
    @click="onClick"
  >
    <component v-if="props.icon?.length" :is="Icon" class="icon" />
    <slot v-if="$slots.default" />
    <template v-if="props.role !== 'icon'">
      {{ props.label }}
    </template>
  </button>
</template>
