<script setup lang="ts">
import { computed, reactive, ref, defineEmits, watch, onMounted } from 'vue';
import { onClickOutside } from '@vueuse/core';
import Chip from '../Chips/RChip.vue';
import Icon from '../Icon/RIcon.vue';
import './dropdown.css';
export interface Option {
  value: string | number;
  label: string;
  prependIcon?: string;
  disabled?: boolean;
}
export interface SelectProps {
  /**
   * Options of the Dropdown
   * @type Option[]
   * @default []
   * @example
   * <Dropdown
   *  :options="[
   *   {
   *    value: '1',
   *    label: 'Option 1',
   *   },
   *   {
   *    value: '2',
   *    label: '2',
   *   },
   *  ]"
   * />
   */
  options: Option[];

  /**
   * Value of the Dropdown
   * @type string | number | Option | Option[]
   * @default ''
   * @example
   * <Dropdown v-model="model" />
   */
  modelValue: string | number | Option | Option[];

  /**
   * Placeholder Dropdown
   * @type InputHTMLAttributes['placeholder'];
   * @default ''
   * @example
   * <Dropdown placeholder="Placeholder" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
   */
  placeholder?: string;

  /**
   * Allow to create new options
   * @type boolean
   * @default false
   * @example
   * <Dropdown taggable />
   */
  taggable?: boolean;

  /**
   * Allow to select multiple options
   * @type boolean
   * @default false
   * @example
   * <Dropdown multiple />
   */
  multiple?: boolean;

  /**
   * Disable the Dropdown
   * @type boolean
   * @default false
   * @example
   * <Dropdown disabled />
   */
  disabled?: boolean;

  /**
   * Loading state of the Dropdown
   * @type boolean
   * @default false
   * @example
   * <Dropdown loading />
   */
  loading?: boolean;

  /**
   * Icon to prepend
   * @type string
   * @default ''
   * @example
   * <Dropdown prependIcon="search" />
   */
  prependIcon?: string;

  /**
   * Icon to append
   * @type string
   * @default 'expand_less'
   * @example
   * <Dropdown appendIcon="expand_more" />
   */
  appendIcon?: string;

  /**
   * Allow to search for options
   * @type boolean
   * @default false
   * @example
   * <Dropdown searchable />
   */
  searchable?: boolean;

  /**
   * Id of the Dropdown
   * @type string
   * @default 'test'
   * @example
   * <Dropdown id="test" />
   */
  id?: string;
}
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  modelValue: '',
  placeholder: '',
  taggable: false,
  multiple: false,
  disabled: false,
  loading: false,
  prependIcon: '',
  appendIcon: 'mdiChevronDown',
  searchable: false,
  id: 'test',
  label: '',
});

const selected = ref<string | number>('');
const selectedMultiple = reactive<Option[]>([]);
const active = ref(false);
const inputModel = ref('');
const emit = defineEmits(['update:modelValue']);

/**
 * @description - HTML elements references
 */
const dropdown = ref<HTMLElement | null>(null);
const input = ref<HTMLInputElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);
/**
 * @description - Handles the appearance of the select list
 * @param e MouseEvent
 * @returns void
 */
const setActive = (e: MouseEvent) => {
  if (props.disabled) return;
  e.stopPropagation();
  active.value = !active.value;
  if (active.value) {
    dropdown.value?.classList.add('dropdown--active');
    dropdown.value?.focus();
    if (props.searchable) input.value?.focus();

    return;
  }
  removeActive();
};

/**
 * @description - Removes the active state
 * @returns void
 */
const removeActive = () => {
  active.value = false;
  dropdown.value?.classList.remove('dropdown--active');
  dropdown.value?.blur();
  input.value?.blur();
};

/**
 * @description - Selects an option
 * @param e Click event
 * @param option Selected option
 * @returns void
 */
const selectOption = (e: MouseEvent, option: Option) => {
  if (props.multiple || props.taggable) {
    e.stopPropagation();
    if (!selectedMultiple.find((opt) => opt.value === option.value)) {
      selectedMultiple.push(option);
    } else {
      selectedMultiple.splice(selectedMultiple.indexOf(option), 1);
    }
    inputModel.value = '';
    if (props.searchable) input.value?.focus();
    return;
  }

  selectOneOption(e, option);
};
/**
 * @description - Selects one option
 * @param option Selected option
 * @returns void
 */
const selectOneOption = (e: MouseEvent, option: Option) => {
  if (selected.value === option.value) {
    selected.value = '';
    inputModel.value = '';
    return;
  }
  inputModel.value = option.label;
  selected.value = option.value;
  setActive(e);
  emit('update:modelValue', option);
};
/**
 * @description - Removes an option from the selected options
 * @param option Option to remove
 * @returns void
 */
const removeOption = (e: MouseEvent | KeyboardEvent, option: Option) => {
  if (e instanceof KeyboardEvent && e.key !== 'Backspace') return;
  if (inputModel.value !== '') return;
  e.stopPropagation();
  const index = selectedMultiple.findIndex((opt) => opt.value === option.value);
  selectedMultiple.splice(index, 1);
};
/**
 * @description - Handles the not existing options
 * @returns void
 */
const createTag = (e: KeyboardEvent) => {
  if (!props.taggable) return;
  e.stopPropagation();
  const value = inputModel.value;
  if (value === '') return;
  const option = props.options.find((opt) => opt.label === value);
  if (!option) {
    selectedMultiple.push({ value, label: value });
    inputModel.value = '';
    input.value?.focus();
  }
};
const isSelected = (option: Option) => {
  if (props.multiple) {
    return selectedMultiple.find((opt) => opt.value === option.value);
  }
  return selected.value === option.value;
};
/**
 * @description - Search for options
 * @returns {Option[]} - Returns an array of options
 */
const searchedOptions = computed(() => {
  if (!props.searchable) return props.options;
  const result = props.options.filter((option) => {
    return option.label.toLowerCase().includes(inputModel.value.toLowerCase());
  });
  return result;
});

const isReadOnly = computed(() => {
  return props.multiple || props.taggable || !props.searchable;
});

onMounted(() => {
  if (props.modelValue) {
    if (props.multiple) {
      selectedMultiple.push(props.modelValue as Option);
    } else {
      selected.value = (props.modelValue as Option).value;
      inputModel.value = (props.modelValue as Option).label;
    }
  }
});
/**
 * @description - Watch the selected multiple options
 * @returns void
 */
watch(selectedMultiple, (value) => {
  emit('update:modelValue', value);
});

/**
 * @description - Watch the outside click
 * @returns void
 */
onClickOutside(wrapper, removeActive);
</script>
<template>
  <div ref="wrapper" class="r-dropdown-wrapper">
    <div ref="dropdown" :class="{
      'r-dropdown': true,
      'r-dropdown--disabled': props.disabled,
      'r-dropdown--loading': props.loading,
    }" role="select" @click="setActive">
      <div v-if="props.prependIcon || $slots['prepend']" :class="{
        'r-dropdown__prepend-icon': true,
        'r-dropdown__prepend-icon--active': active,
      }">
        <slot name="prepend">
          <Icon v-if="props.prependIcon" :name="props.prependIcon" />
        </slot>
      </div>
      <div v-if="props.taggable" class="r-dropdown__tags">
        <Chip v-for="(option, index) in selectedMultiple" :key="index" appendIcon="close" class="r-dropdown__tags__chip"
          :label="option.label" variant="primary" @click:close="removeOption($event, option)" />
      </div>
      <div v-if="props.multiple" class="r-dropdown__multiple">
        <p v-for="(option, index) in selectedMultiple" :key="index">
          {{ option.label + ',' }}
        </p>
      </div>
      <input :id="props.id" ref="input" v-model="inputModel" :class="{
        'r-dropdown__input': true,
        'r-dropdown__input--loading': props.loading,
      }" :disabled="props.disabled" :placeholder="props.placeholder" :readonly="isReadOnly" type="text"
        @keydown.backspace="
          removeOption($event, selectedMultiple[selectedMultiple.length - 1])
          " @keydown.enter="createTag($event)" />
      <div v-if="props.appendIcon || $slots['append']" :class="{
        'r-dropdown__append-icon': true,
        'r-dropdown__append-icon--active': active,
      }">
        <slot name="append">
          <Icon v-if="props.appendIcon" :name="props.appendIcon" />
        </slot>
      </div>
    </div>
    <ul :class="{
      'r-dropdown-options': true,
      'r-dropdown-options--active': active,
    }">
      <li v-for="option in searchedOptions" :key="option.value" :aria-disabled="option.disabled" :class="{
        'r-dropdown-options__option': true,
        'r-dropdown-options__option--active': isSelected(option),
      }" @click="selectOption($event, option)">
        <div style="display: flex; align-items: center">
          <slot v-if="!option.prependIcon" name="option-prepend" />
          <Icon v-else :class="{
            'r-dropdown-options__option__prepend-icon': true,
            'r-dropdown-options__option__prepend-icon--active':
              isSelected(option),
          }" :name="option.prependIcon" />
          <p :class="{
            'r-dropdown-options__option__label': true,
            'r-dropdown-options__option__label--active': isSelected(option),
          }">
            {{ option.label }}
          </p>
        </div>
        <Icon v-if="isSelected(option)" :class="{
          'r-dropdown-options__option__append-icon': true,
          'r-dropdown-options__option__append-icon--active':
            isSelected(option),
        }" name="mdiCheck" />
      </li>
    </ul>
  </div>
</template>
