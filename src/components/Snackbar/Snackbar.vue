<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from '../Button/Button.vue';
import Icon from '../Icon/Icon.vue';
import './snackbar.css';

export interface IProps {
  text: string;
  actionText?: string;
  showAction?: boolean;
  showClose?: boolean;
  left?: boolean;
  show?: boolean;
  timeout?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  text: '',
  actionText: '',
  showAction: false,
  showClose: false,
  left: false,
  show: true,
  timeout: 0,
});
const shown = ref(props.show);
const emit = defineEmits(['actionClick', 'close']);
const onClickAction = () => {
  emit('actionClick');
};
const onClose = () => {
  shown.value = false;
  emit('close', { show: shown.value });
};
onMounted(() => {
  if (props.timeout) {
    setTimeout(() => {
      shown.value = false;
      emit('close', { show: shown.value });
    }, props.timeout);
  }
});
</script>
<template>
  <div
    :class="{
      snackbar: true,
      'snackbar--closed': !shown,
      [props.left ? 'snackbar--left' : 'snackbar--right']: true,
    }"
  >
    <div class="snackbar__text">{{ props.text }}</div>
    <div v-if="props.showAction" class="snackbar__action">
      <slot name="action" />
      <Button
        v-if="!$slots['action']"
        variant="ghost"
        size="small"
        @click="onClickAction"
        >{{ props.actionText }}</Button
      >
    </div>
    <div v-if="props.showClose" class="snackbar__close">
      <slot name="close" />
      <Icon
        v-if="!$slots['close']"
        name="close"
        size="14"
        @click.stop="onClose"
      />
    </div>
  </div>
</template>
