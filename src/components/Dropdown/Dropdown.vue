<script setup lang="ts">
import List from './List.vue';
import { Dropdown } from 'floating-vue';
import { reactive, computed } from 'vue';
import 'floating-vue/dist/style.css';
import Button from '../Button/Button.vue';
import type { Option } from './dropdown';

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
  triggers?: ['hover' | 'click' | 'focus' | 'touch'];
  delay?: number;
  shown?: boolean;
  distance?: number;
  skidding?: number;
  arrowPadding?: number;
  container?: string;
  autoHide?: boolean;
  disabled?: boolean;
  positioningDisabled?: boolean;
  autoSize?: boolean | 'min' | 'max';
  flip?: boolean;
  shift?: boolean;
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
  triggers: () => ['click'],
  delay: 0,
  shown: false,
  distance: 10,
  skidding: 0,
  arrowPadding: 0,
  container: '.v-popper',
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
  'dispose',
  'resize',
  'select',
  'cancel',
  'submit',
]);
const state = reactive({ msg: '', visible: false });
const onShow = () => {
  state.visible = true;
  emit('show');
};
const onHide = () => {
  state.visible = false;
  emit('hide');
};
const onDispose = () => {
  emit('dispose');
};
const onResize = () => {
  emit('resize');
};
const onSelect = (value: string) => {
  emit('select', { value });
};
const iconName = computed(() => {
  if (props.icon) return props.icon;
  return state.visible ? 'expand_less' : 'expand_more';
});
</script>
<template>
  <div style="display: flex">
    <Dropdown
      v-bind="props"
      v-model:shown="state.visible"
      @show="onShow"
      @hide="onHide"
      @dispose="onDispose"
      @resize="onResize"
    >
      <Button
        v-if="!$slots.default"
        iconRight
        :variant="props.content?.length > 0 ? 'secondary' : 'icon'"
        iconKind="mini"
        :icon="iconName"
      >
        {{ props.content }}
      </Button>
      <slot v-else />
      <template #popper>
        <List
          v-if="!$slots['content']"
          :options="props.options"
          :selected="props.selected"
          :multiple="props.multiple"
          :searchable="props.searchable"
          :actions="props.actions"
          @select="onSelect"
          @cancel="emit('cancel')"
          @submit="emit('submit')"
        />
        <slot v-else name="content" />
      </template>
    </Dropdown>
  </div>
</template>
<style scoped>
::v-deep .v-popper__arrow-container {
  display: none;
}
::v-deep .v-popper--theme-dropdown .v-popper__inner {
  border: none;
}
</style>
