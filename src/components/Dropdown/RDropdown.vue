<script setup lang="ts">
import { computed, defineEmits, onMounted, reactive, ref, watch, watchEffect } from 'vue'
import Chip from '../Chips/RChip.vue'
import Icon from '../Icon/RIcon.vue'
import './dropdown.css'
import RTooltip from '../Tooltip/RTooltip.vue'

export interface Option {
  value: string | number
  label: string
  prependIcon?: string
  disabled?: boolean
}
export interface SelectProps {
  /**
   * Options of the Dropdown
   * @type {Option[]}
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
  options: Option[]

  /**
   * Value of the Dropdown
   * @type {string | number | Option | Option[]}
   * @default ''
   * @example
   * <Dropdown v-model="model" />
   */
  modelValue: string | number | Option | Option[]

  /**
   * Placeholder Dropdown
   * @type {InputHTMLAttributes['placeholder']}
   * @default ''
   * @example
   * <Dropdown placeholder="Placeholder" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder
   */
  placeholder?: string

  /**
   * Allow to create new options
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown taggable />
   */
  taggable?: boolean

  /**
   * Allow to select multiple options
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown multiple />
   */
  multiple?: boolean

  /**
   * Disable the Dropdown
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown disabled />
   */
  disabled?: boolean

  /**
   * Loading state of the Dropdown
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown loading />
   */
  loading?: boolean

  /**
   * Icon to prepend
   * @type {string}
   * @default ''
   * @example
   * <Dropdown prependIcon="search" />
   */
  prependIcon?: string

  /**
   * Icon to append
   * @type {string}
   * @default 'expand_less'
   * @example
   * <Dropdown appendIcon="expand_more" />
   */
  appendIcon?: string

  /**
   * Allow to search for options
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown searchable />
   */
  searchable?: boolean

  /**
   * Clearable status to selected and searched options
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown clearable />
   */
  clearable?: boolean

  /**
   * Id of the Dropdown
   * @type {string}
   * @default 'test'
   * @example
   * <Dropdown id="test" />
   */
  id?: string

  /**
   * Close the Dropdown on select
   * @type {boolean}
   * @default true
   * @example
   * <Dropdown :closeOnSelect="false" />
   */
  closeOnSelect?: boolean

  /**
   * Class of the Dropdown
   * @type {string}
   * @default ''
   * @example
   * <Dropdown dropdownClass="w-96" />
   */
  dropdownClass?: string

  /**
   * Class of the options
   * @type {string}
   * @default ''
   * @example
   * <Dropdown optionsClass="w-96" />
   */
  optionsClass?: string

  /**
   * Error message for error state
   * @type {string}
   * @default ''
   * @example
   * <Dropdown errorMsg="Error message" />
   */
  errorMsg?: string

  /**
   * Hint message for the Dropdown
   * @type {string}
   * @default ''
   * @example
   * <Dropdown hint="Hint message" />
   */
  hint?: string

  /**
   * Hide the hint and error message
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown hideDetails />
   */
  hideDetails?: boolean

  /**
   * Autocomplete of the Dropdown
   * @type {'on' | 'off'}
   * @default 'off'
   * @example
   * <Dropdown autocomplete="on" />
   */
  autocomplete?: 'on' | 'off'
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
  clearable: false,
  id: 'test',
  label: '',
  closeOnSelect: true,
  dropdownClass: '',
  optionsClass: '',
  errorMsg: '',
  hideDetails: false,
  autocomplete: 'off',
})

const emit = defineEmits(['update:modelValue'])
const selected = ref<Option>({ value: '', label: '' })
const selectedMultiple = reactive<Option[]>([])
const active = ref(false)
const inputModel = ref('')

/**
 * @description - HTML elements references
 */
const dropdown = ref<HTMLElement>()
const input = ref<HTMLInputElement>()
const wrapper = ref<HTMLElement>()

/**
 * @description - Handles the appearance of the select list
 * @param e MouseEvent
 */
function setActive(e: MouseEvent, activator?: () => void) {
  e.stopPropagation()
  if (props.disabled)
    return
  active.value = true
  if (activator)
    activator()
  if (active.value) {
    dropdown.value?.classList.add('r-dropdown--active')
    dropdown.value?.focus()
    if (props.searchable)
      input.value?.focus()

    return
  }
  removeActive()
}

/**
 * @description - Removes the active state
 */
function removeActive() {
  active.value = false
  dropdown.value?.classList.remove('r-dropdown--active')
  dropdown.value?.blur()
  input.value?.blur()
}

/**
 * @description - Selects an option
 * @param e Click event
 * @param option Selected option
 */
function selectOption(e: any, option: Option, hide: any, updatePosition: any) {
  e.stopPropagation()
  updatePosition()
  if (option.disabled)
    return
  if (props.multiple || props.taggable) {
    if (!selectedMultiple.find(opt => opt.value === option.value))
      selectedMultiple.push(option)
    else
      selectedMultiple.splice(selectedMultiple.indexOf(option), 1)

    inputModel.value = ''
    if (props.searchable)
      input.value?.focus()
    return
  }

  selectOneOption(e, option)

  if (props.closeOnSelect) {
    hide()
    removeActive()
  }
}
/**
 * @description - Selects one option
 * @param e option Selected option
 */
function selectOneOption(e: MouseEvent, option: Option) {
  if (selected.value.value === option.value) {
    selected.value = {} as Option
    inputModel.value = ''
    emit('update:modelValue', '')
    return
  }
  inputModel.value = option.label
  selected.value = option
  setActive(e)
  emit('update:modelValue', option)
}
/**
 * @description - Removes an option from the selected options
 * @param e option Option to remove
 */
function removeOption(e: MouseEvent | KeyboardEvent, option: Option, updatePosition: any) {
  if (e instanceof KeyboardEvent && e.key !== 'Backspace')
    return
  if (inputModel.value !== '')
    return
  e.stopPropagation()
  updatePosition()
  const index = selectedMultiple.findIndex(opt => opt.value === option.value)
  selectedMultiple.splice(index, 1)
}
/**
 * @description - Handles the not existing options
 */
function createTag(e: KeyboardEvent, updatePosition: any) {
  if (!props.taggable)
    return
  e.stopPropagation()
  updatePosition()
  const value = inputModel.value
  if (value === '')
    return
  const option = props.options.find(opt => opt.label === value)
  if (!option) {
    selectedMultiple.push({ value, label: value })
    inputModel.value = ''
    input.value?.focus()
  }
}
function isSelected(option: Option) {
  if (props.multiple || props.taggable)
    return selectedMultiple.find(opt => opt.value === option.value)

  return selected.value.value === option.value
}
/**
 * @description - Search for options
 * @returns {Option[]} - Returns an array of options
 */
const searchedOptions = computed(() => {
  if (!props.searchable || selected.value.label === inputModel.value)
    return props.options
  const result = props.options.filter((option) => {
    return option.label.toLowerCase().includes(inputModel.value.toLowerCase())
  })
  return result
})

const isReadOnly = computed(() => {
  return !props.searchable
})

function reset() {
  if (props.modelValue) {
    if (props.multiple) {
      selectedMultiple.push(props.modelValue as Option)
    }
    else {
      selected.value = props.modelValue as Option
      inputModel.value = (props.modelValue as Option).label
    }
  }
  else {
    selected.value = {} as Option
    selectedMultiple.splice(0, selectedMultiple.length)
  }
}

function handleInput(updatePosition: () => void) {
  if (props.searchable)
    updatePosition()

  if (props.multiple || props.taggable)
    return

  if (inputModel.value === '') {
    selected.value = {} as Option
    emit('update:modelValue', '')
  }
}

function handleClearable(e: MouseEvent, updatePosition: () => void) {
  e.stopPropagation()
  updatePosition()
  if (props.multiple || props.taggable) {
    selectedMultiple.splice(0, selectedMultiple.length)
    return
  }
  selected.value = {} as Option
  inputModel.value = ''
  emit('update:modelValue', '')
}

onMounted(() => {
  reset()
})

/**
 * @description - Watch the selected multiple options
 * @returns void
 */
watch(selectedMultiple, (value) => {
  emit('update:modelValue', value)
})

watch(() => props.modelValue, (_value) => {
  reset()
})
</script>

<template>
  <div ref="wrapper" class="r-dropdown-wrapper">
    <RTooltip
      :auto-hide="false"
      :offset="0"
      outside-click
      placement="bottom"
      resizable
      tooltip-class="w-full"
      trigger-class="w-full"
      :triggers="['click']"
      type="dropdown"
      @hide="removeActive"
    >
      <template #default="{ activators, updatePosition }">
        <div
          ref="dropdown"
          class="r-dropdown"
          :class="{
            'r-dropdown--disabled': props.disabled,
            'r-dropdown--loading': props.loading,
            [props.dropdownClass]: props.dropdownClass,
            'r-dropdown--error': props.errorMsg,
          }"
          role="select"
          @click="setActive($event, activators.click)"
        >
          <div
            v-if="props.prependIcon || $slots.prepend"
            class="r-dropdown__prepend-icon"
            :class="{
              'r-dropdown__prepend-icon--active': active,
              'r-dropdown__prepend-icon--error': props.errorMsg,
            }"
          >
            <slot name="prepend">
              <Icon v-if="props.prependIcon" :name="props.prependIcon" />
            </slot>
          </div>
          <div v-if="props.taggable && selectedMultiple.length" class="r-dropdown__tags">
            <slot
              name="tags"
              :options="selectedMultiple"
              :remove-option="removeOption"
              :update-position="updatePosition"
            >
              <Chip
                v-for="(option, index) in selectedMultiple"
                :key="index"
                append-icon="mdiClose"
                class="r-dropdown__tags__chip"
                closable
                :label="option.label"
                variant="primary"
                @click:close="removeOption($event, option, updatePosition)"
              />
            </slot>
          </div>
          <div v-if="props.multiple && selectedMultiple.length" class="r-dropdown__multiple">
            <p v-for="(option, index) in selectedMultiple" :key="index">
              {{ `${option.label},` }}
            </p>
          </div>
          <input
            :id="props.id"
            ref="input"
            v-model="inputModel"
            :autocomplete="props.autocomplete"
            class="r-dropdown__input"
            :class="{
              'r-dropdown__input--loading': props.loading,
            }"
            :disabled="props.disabled"
            :placeholder="props.placeholder"
            :readonly="isReadOnly"
            role="presentation"
            type="text"
            @input.prevent="handleInput(updatePosition)"
            @keydown.backspace="
              removeOption($event, selectedMultiple[selectedMultiple.length - 1], updatePosition)
            "
            @keydown.enter="createTag($event, updatePosition)"
          >
          <div
            v-if="props.clearable"
            class="r-dropdown__clearable"
            :data-has-value="
              (inputModel !== '' || selectedMultiple.length)
                && active
            "
            @click="handleClearable($event, updatePosition)"
          >
            <Icon

              name="mdiCloseCircle"
              size="18"
            />
          </div>
          <div
            v-if="props.appendIcon || $slots.append"
            class="r-dropdown__append-icon"
            :class="{
              'r-dropdown__append-icon--active': active,
              'r-dropdown__append-icon--error': props.errorMsg,
            }"
          >
            <slot name="append">
              <Icon v-if="props.appendIcon" :name="props.appendIcon" />
            </slot>
          </div>
        </div>
      </template>
      <template #content="{ hide, updatePosition }">
        <ul
          class="r-dropdown-options"
          :class="{
            'r-dropdown-options--active': active,
            [props.optionsClass]: props.optionsClass,
          }"
        >
          <li
            v-for="option in searchedOptions"
            :key="option.value"
            :aria-disabled="option.disabled"
            class="r-dropdown-options__option"
            :class="{
              'r-dropdown-options__option--active': isSelected(option),
              'r-dropdown-options__option--disabled': option.disabled,
            }"
            @click.prevent="selectOption($event, option, hide, updatePosition)"
          >
            <div class="flex items-center">
              <slot name="option-prepend">
                <Icon
                  v-if="option.prependIcon"
                  class="r-dropdown-options__option__prepend-icon"
                  :class="{
                    'r-dropdown-options__option__prepend-icon--active':
                      isSelected(option),
                  }"
                  :name="option.prependIcon"
                />
              </slot>
              <p
                class="r-dropdown-options__option__label"
                :class="{
                  'r-dropdown-options__option__label--active': isSelected(option),
                }"
              >
                {{ option.label }}
              </p>
            </div>
            <Icon
              v-if="isSelected(option)"
              class="r-dropdown-options__option__append-icon"
              :class="{
                'r-dropdown-options__option__append-icon--active':
                  isSelected(option),
              }"
              name="mdiCheck"
            />
          </li>
          <li v-if="searchedOptions.length === 0" class="r-dropdown-options__no-option">
            <slot name="not-options">
              No options
            </slot>
          </li>
        </ul>
      </template>
    </RTooltip>
    <div v-if="!$props.hideDetails" class="r-dropdown-details">
      <div v-if="props.errorMsg" class="r-dropdown-error">
        {{ props.errorMsg }}
      </div>
      <div v-if="props.hint" class="r-dropdown-hint">
        {{ props.hint }}
      </div>
    </div>
  </div>
</template>
