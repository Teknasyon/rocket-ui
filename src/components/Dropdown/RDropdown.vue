<script setup lang="ts">
import { computed, reactive, ref, defineEmits, watch } from 'vue';
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
   * Placeholder Dropdown
   * @type InputHTMLAttributes['placeholder'];
   * @default ''
   * @example
   * <Dropdown placeholder="Placeholder" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
   */
  placeholder?: string;

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
   * Value of the Dropdown
   * @type string | number | Option | Option[]
   * @default ''
   * @example
   * <Dropdown v-model="model" />
   */
  modelValue?: string | number | Option | Option[];

  /**
   * Allow to search for options
   * @type boolean
   * @default false
   * @example
   * <Dropdown searchable />
   */
  searchable?: boolean;
}
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  placeholder: '',
  taggable: false,
  multiple: false,
  disabled: false,
  loading: false,
  prependIcon: '',
  appendIcon: 'expand_less',
  modelValue: '',
  searchable: false,
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
/**
 * @description - Handles the appearance of the select list
 * @param e Click event
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
    document.addEventListener('click', setActive);

    return;
  }
  dropdown.value?.classList.remove('dropdown--active');
  dropdown.value?.blur();
  input.value?.blur();
  document.removeEventListener('click', setActive);
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
    if (!selectedMultiple.includes(option)) {
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
/**
 * @description - Watch the selected multiple options
 * @returns void
 */
watch(selectedMultiple, (value) => {
  emit('update:modelValue', value);
});
</script>
<template>
  <div class="dropdown-wrapper">
    <div
      ref="dropdown"
      :class="{
        dropdown: true,
        'dropdown--disabled': props.disabled,
        'dropdown--loading': props.loading,
      }"
      @click="setActive"
    >
      <div
        :class="{
          'dropdown__prepend-icon': true,
          'dropdown__prepend-icon--active': active,
        }"
      >
        <slot v-if="!props.prependIcon" name="prepend-icon" />
        <Icon v-else :name="props.prependIcon" />
      </div>
      <div v-if="props.taggable" class="dropdown__tags">
        <Chip
          v-for="(option, index) in selectedMultiple"
          :key="index"
          :label="option.label"
          appendIcon="close"
          class="dropdown__tags__chip"
          variant="primary"
          @click:close="removeOption($event, option)"
        />
      </div>
      <div v-if="props.multiple" class="dropdown__multiple">
        <p v-for="(option, index) in selectedMultiple" :key="index">
          {{ option.label + ',' }}
        </p>
      </div>
      <input
        id="select"
        ref="input"
        type="text"
        v-model="inputModel"
        :class="{
          dropdown__input: true,
          'dropdown__input--loading': props.loading,
        }"
        :disabled="props.disabled"
        :placeholder="props.placeholder"
        :readonly="!props.searchable"
        @keydown.backspace="
          removeOption($event, selectedMultiple[selectedMultiple.length - 1])
        "
        @keydown.enter="createTag($event)"
      />
      <div
        :class="{
          'dropdown__append-icon': true,
          'dropdown__append-icon--active': active,
        }"
      >
        <slot v-if="!props.appendIcon" name="append-icon" />
        <Icon v-else :name="props.appendIcon" />
      </div>
    </div>
    <ul
      :class="{ 'dropdown-options': true, 'dropdown-options--active': active }"
    >
      <li
        v-for="option in searchedOptions"
        :key="option.value"
        :class="{
          'dropdown-options__option': true,
          'dropdown-options__option--active':
            option.value === selected || selectedMultiple?.includes(option),
        }"
        :aria-disabled="option.disabled"
        @click="selectOption($event, option)"
      >
        <div style="display: flex; align-items: center">
          <slot v-if="!option.prependIcon" name="option-prepend" />
          <Icon
            v-else
            :class="{
              'dropdown-options__option__prepend-icon': true,
              'dropdown-options__option__prepend-icon--active':
                option.value === selected || selectedMultiple?.includes(option),
            }"
            :name="option.prependIcon"
          />
          <p
            :class="{
              'dropdown-options__option__label': true,
              'dropdown-options__option__label--active':
                option.value === selected || selectedMultiple?.includes(option),
            }"
          >
            {{ option.label }}
          </p>
        </div>
        <Icon
          v-if="option.value === selected || selectedMultiple?.includes(option)"
          :class="{
            'dropdown-options__option__append-icon': true,
            'dropdown-options__option__append-icon--active':
              option.value === selected || selectedMultiple?.includes(option),
          }"
          name="check"
        />
      </li>
    </ul>
  </div>
</template>
