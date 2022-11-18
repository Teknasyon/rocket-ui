<script setup lang="ts">
import { reactive, computed } from 'vue';
import './dropdownn.css';
import Button from '../Button/Button.vue';
import Textfield from '../Textfield/Textfield.vue';
import Checkbox from '../Checkbox/Checkbox.vue';
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
  options: () => [],
  selected: () => [],
  multiple: false,
  searchable: false,
  actions: false,
});
const emit = defineEmits(['select', 'cancel', 'submit']);
type State = {
  options: Option[];
  selected: string[];
  search: string;
  shown: boolean;
};
const state = reactive<State>({
  shown: false,
  search: '',
  selected: props.selected || [],
  options: props.options || [],
});
const filteredOptions = computed(() => {
  return state.options.filter((option: Option) => {
    return option.label.toLowerCase().includes(state.search.toLowerCase());
  });
});
const onSearch = (e: { value: string }) => {
  state.search = e.value;
};
const onSelect = (value: string) => {
  if (props.multiple) {
    if (state.selected.includes(value)) {
      state.selected = state.selected.filter((item) => item !== value);
      return;
    }
    state.selected.push(value);
  } else {
    state.selected = [value];
  }

  emit('select', state.selected);
};
</script>
<template>
  <div class="list">
    <div v-if="props.searchable" class="list__header">
      <Textfield
        id="search"
        v-model="state.search"
        placeholder="Search"
        class="list__search"
        @input="onSearch"
      />
    </div>
    <div class="list__body">
      <div class="list__items">
        <p v-if="filteredOptions.length === 0">No results found!!</p>
        <div
          v-else
          v-for="{ label, value } in filteredOptions"
          :key="value"
          class="list__item"
        >
          <Checkbox
            v-if="props.multiple"
            :checked="state.selected.includes(value)"
            :id="value"
            :label="label"
            class="item-multiple"
            :class="{ 'list-item--selected': state.selected.includes(value) }"
            @change="onSelect(value)"
          />
          <p
            v-else
            :id="value"
            class="item-single"
            :class="{ 'list-item--selected': state.selected.includes(value) }"
            @click="onSelect(value)"
          >
            {{ label }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="props.actions" class="list__footer">
      <Button
        class="footer__cancel"
        size="small"
        variant="outline"
        @click="emit('cancel')"
      >
        Cancel
      </Button>
      <Button
        class="footer__submit"
        size="small"
        variant="primary"
        @click="emit('submit')"
      >
        Submit
      </Button>
    </div>
  </div>
</template>
