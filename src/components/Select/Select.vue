<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import Icon from '../Icon/Icon.vue';
import './select.css';
export interface Option {
  value: string | number;
  label: string;
}
export interface SelectProps {
  options: Option[];
  placeholder?: string;
  taggable?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  prependIcon?: string;
  appendIcon?: string;
}
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
  ],
  placeholder: '请选择',
  taggable: false,
  searchable: false,
  multiple: false,
  prependIcon: '',
  appendIcon: 'expand_less',
});
const selected = ref('');
const selectedMultiple = reactive<Option[]>([]);
const active = ref(false);
const search = ref('');

const select = ref<HTMLElement | null>(null);
const input = ref<HTMLInputElement | null>(null);
const setActive = (e: MouseEvent) => {
  e.stopPropagation();
  active.value = !active.value;
  if (active.value) {
    select.value?.classList.add('select--active');
    select.value?.focus();
    input.value?.focus();
    document.addEventListener('click', setActive);
  } else {
    select.value?.classList.remove('select--active');
    select.value?.blur();
    input.value?.blur();
    document.removeEventListener('click', setActive);
  }
};
const selectOption = (e: MouseEvent, option: Option) => {
  selected.value = option.label;
  if (props.multiple) {
    e.stopPropagation();
    selectedMultiple.push(option);
  }
};
const filteredOptions = computed(() => {
  const result = props.options.filter((option) => {
    return option.label.toLowerCase().includes(search.value.toLowerCase());
  });
  return result;
});
const searchClick = (e: MouseEvent) => {
  e.stopPropagation();
};
const appendIconName = computed(() => {
  if (props.appendIcon) return props.appendIcon;
  return 'expand_less';
});
</script>
<template>
  <div class="select-wrapper">
    <div ref="select" class="select" @click="setActive">
      <div
        :class="{
          'select__prepend-icon': true,
          'select__prepend-icon--active': active,
        }"
      >
        <slot name="prepend-icon" />
        <Icon v-if="!$slots['prepend-icon']" :name="props.prependIcon" />
      </div>
      <div v-if="taggable">
        <p
          style="background-color: red; margin: 2px"
          v-for="(option, index) in selectedMultiple"
          :key="index"
        >
          {{ option.label }}
        </p>
      </div>
      <input
        ref="input"
        type="text"
        class="select__input"
        id="select"
        :placeholder="props.placeholder"
        v-model="selected"
        :readonly="!props.taggable"
      />
      <div
        :class="{
          'select__append-icon': true,
          'select__append-icon--active': active,
        }"
      >
        <slot name="append-icon" />
        <Icon v-if="!$slots['append-icon']" :name="appendIconName" />
      </div>
    </div>
    <div :class="{ 'select-options': true, 'select-options--active': active }">
      <input
        v-if="props.searchable"
        v-model="search"
        class="select-options__search-input"
        type="search"
        id="search"
        placeholder="Search"
        @click="searchClick"
      />

      <div
        :class="{
          'select-options__option': true,
          'select-options__option--active': option.label === selected,
        }"
        v-for="option in filteredOptions"
        :key="option.value"
        @click="selectOption($event, option)"
      >
        <div style="display: flex; align-items: center">
          <slot name="option-prepend" />
          <Icon
            v-if="!$slots['option-prepend']"
            name="face"
            :class="{
              'select-options__option__prepend-icon': true,
              'select-options__option__prepend-icon--active':
                option.label === selected,
            }"
          />
          <p
            :class="{
              'select-options__option__label': true,
              'select-options__option__label--active':
                option.label === selected,
            }"
          >
            {{ option.label }}
          </p>
        </div>
        <Icon
          v-if="option.label === selected"
          name="check"
          :class="{
            'select-options__option__append-icon': true,
            'select-options__option__append-icon--active':
              option.label === selected,
          }"
        />
      </div>
    </div>
  </div>
</template>
