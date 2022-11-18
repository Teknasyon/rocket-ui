<script setup lang="ts">
import List from './List.vue';
import { Dropdown } from 'floating-vue';
import { reactive, computed } from 'vue';
import 'floating-vue/dist/style.css';
import Button from '../Button/Button.vue';
import type { Option } from './dropdownn';

export interface Props {
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
  delay?: number;
  distance?: number;
  skidding?: number;
  autoHide?: boolean;
  disabled?: boolean;
  autoSize?: boolean;
  handleResize?: boolean;
  options: Option[];
  selected: string[];
  multiple?: boolean;
  searchable?: boolean;
  actions?: boolean;
  icon?: string;
}
const props = withDefaults(defineProps<Props>(), {
  popperClass: '',
  placement: 'auto',
  content: '',
  strategy: 'absolute',
  delay: 0,
  shown: false,
  distance: 10,
  skidding: 0,
  arrowPadding: 0,
  container: '.dropdown__trigger',
  autoHide: true,
  disabled: false,
  positioningDisabled: false,
  autoSize: false,
  flip: false,
  shift: false,
  handleResize: true,
  options: () => [],
  selected: () => [],
  multiple: false,
  searchable: true,
  actions: true,
  icon: '',
});
const emit = defineEmits([
  'show',
  'hide',
  'resize',
  'select',
  'cancel',
  'submit',
]);
const state = reactive({ visible: false });
const onShow = () => {
  state.visible = true;
  emit('show');
};
const onHide = () => {
  state.visible = false;
  emit('hide');
};
const onResize = () => {
  emit('resize');
};
const onSelect = (value: string) => {
  if (!props.multiple) {
    state.visible = false;
  }
  emit('select', { value });
};
const iconName = computed(() => {
  if (props.icon) return props.icon;
  return state.visible ? 'expand_less' : 'expand_more';
});
</script>
<template>
  <Dropdown
    theme="dropdown"
    :popper-class="props.popperClass"
    :placement="props.placement"
    :content="props.content"
    :strategy="props.strategy"
    :delay="props.delay"
    :distance="props.distance"
    :skidding="props.skidding"
    :container="props.container"
    :auto-hide="props.autoHide"
    :disabled="props.disabled"
    :auto-size="props.autoSize"
    :flip="props.flip"
    :shift="props.shift"
    :handle-resize="props.handleResize"
    v-model:shown="state.visible"
    @show="onShow"
    @hide="onHide"
    @resize="onResize"
  >
    <Button
      v-if="!$slots.default"
      class="dropdown__trigger"
      :disabled="props.disabled"
      :variant="props.content?.length > 0 ? 'secondary' : 'icon-only'"
      :icon="iconName"
      iconRight
    >
      {{ props.content }}
    </Button>
    <slot v-else />
    <template #popper="{ hide }">
      <List
        v-if="!$slots['content']"
        :options="props.options"
        :selected="props.selected"
        :multiple="props.multiple"
        :searchable="props.searchable"
        :actions="props.actions"
        @select="onSelect"
        @cancel="emit('cancel', { hide })"
        @submit="emit('submit')"
      />
      <slot v-else name="content" />
    </template>
  </Dropdown>
</template>
<style scoped>
::v-deep .v-popper__arrow-container {
  display: none;
}
::v-deep .v-popper--theme-dropdown .v-popper__inner {
  border: none;
}
</style>
