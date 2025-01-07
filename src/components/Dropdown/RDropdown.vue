<script setup lang="ts">
import { computed, defineEmits, onMounted, ref, watch } from 'vue'
import Chip from '../Chips/RChip.vue'
import Icon from '../Icon/RIcon.vue'
import './dropdown.css'
import RTooltip from '../Tooltip/RTooltip.vue'

export interface Option {
  [key: string]: any
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
  options: Option[] | any

  /**
   * Value of the Dropdown
   * @type {string | number | Option | Option[]}
   * @default ''
   * @example
   * <Dropdown v-model="model" />
   */
  modelValue: string | number | Option | Option[] | any

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
   * Allow to select multiple options as chips
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown chips />
   */
  chips?: boolean

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

  /**
   * Text to show when there is no options
   * @type {string}
   * @default 'No options'
   * @example
   * <Dropdown noOptionsText="No options" />
   */
  noOptionsText?: string

  /**
   * Hide the check icon of the selected option
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown hideOptionCheckIcon />
   */
  hideOptionCheckIcon?: boolean

  /**
   * Clearable state of the chips
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown hideChipClear />
   */
  hideChipClear?: boolean

  /**
   * Tooltip class
   * @type {string}
   * @default ''
   * @example
   * <Dropdown tooltipClass="w-96" />
   */
  tooltipClass?: string

  /**
   * Show select all option
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown showSelectAll />
   */
  showSelectAll?: boolean

  /**
   * Text of the select all option
   * @type {string}
   * @default 'Select all'
   * @example
   * <Dropdown selectAllText="Select all" />
   */
  selectAllText?: string

  /**
   * Disable deselecting the selected option
   * @type {boolean}
   * @default false
   * @example
   * <Dropdown disableDeselect />
   */
  disableDeselect?: boolean

  /**
   * Maximum number of visible chips
   * @type {number}
   * @default 2
   * @example
   * <Dropdown :maxVisibleChips="3" />
   */
  maxVisibleChips?: number
}

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  modelValue: {} as Option | Option[] | string | number | any,
  placeholder: '',
  chips: false,
  multiple: false,
  disabled: false,
  loading: false,
  prependIcon: '',
  appendIcon: 'mdiChevronDown',
  searchable: false,
  clearable: false,
  id: 'r-dropdown',
  label: '',
  closeOnSelect: true,
  dropdownClass: '',
  optionsClass: '',
  errorMsg: '',
  hideDetails: false,
  autocomplete: 'off',
  noOptionsText: 'No options',
  hideOptionCheckIcon: false,
  hideChipClear: false,
  tooltipClass: '',
  showSelectAll: false,
  selectAllText: 'Select all',
  disableDeselect: false,
  maxVisibleChips: 2,
})

const emit = defineEmits(['update:modelValue', 'clear', 'removeOption'])

const selected = ref<Option>({} as Option)
const selectedMultiple = ref<Option[]>([])
const active = ref(false)
const inputModel = ref('')

function isObject(option: Option) {
  if (!option)
    return true
  if (typeof option === 'object')
    return true
  if (typeof option === 'function')
    return true
  if (typeof option === 'symbol')
    return true
  if (typeof option === 'undefined')
    return true
  if (Array.isArray(option))
    return true

  const [optionKey] = Object?.keys(option)

  return ['label', 'value']?.includes(optionKey)
}

const mutatedOptions = computed(() => {
  const options = props.options
  if (!isObject(options[0])) {
    return options.map((option: string) => (
      {
        value: option,
        label: String(option),
      }
    ))
  }

  return options
})

const mutatedModel = computed(() => {
  const model = props.modelValue

  if (!isObject(model)) {
    return {
      value: model,
      label: String(model),
    }
  }

  return model
})

/**
 * @description - HTML elements references
 */
const dropdown = ref<HTMLElement>()
const input = ref<HTMLInputElement>()
const wrapper = ref<HTMLElement>()

/**
 * @description - Handles the appearance of the select list
 */
function toggleActive(id: string) {
  if (props.disabled)
    return

  const dropdownWithId = document.getElementById(id)

  const otherDropdowns = document.querySelectorAll('.r-dropdown--active')

  otherDropdowns.forEach((otherDropdown) => {
    if (otherDropdown.id !== dropdown.value?.id && otherDropdown.classList.contains('r-dropdown--active')) {
      otherDropdown.childNodes.forEach((child: any) => {
        if (child?.classList) {
          Object?.values(child?.classList).filter((cls: any) => cls.includes('--active'))
            .forEach((cls: any) => {
              child?.classList.remove(cls)
            })
        }
      })
      otherDropdown.classList.remove('r-dropdown--active')
    }
  })

  if (dropdownWithId?.classList.contains('r-dropdown--active')) {
    dropdownWithId.classList.remove('r-dropdown--active')
    active.value = false
    dropdown.value?.blur()
    input.value?.blur()
  }
  else {
    dropdownWithId?.classList.add('r-dropdown--active')
    active.value = true
    dropdown.value?.focus()
    input.value?.focus()
    dropdownWithId?.childNodes.forEach((child: any) => {
      if (child?.classList) {
        Object?.values(child?.classList).forEach((cls: any) => {
          child?.classList.add(`${cls}--active`)
        })
      }
    })
  }
}

/**
 * @description - Removes the active class from the dropdown
 */

function removeActive(id: string) {
  const dropdownWithId = document.getElementById(id)
  dropdownWithId?.classList.remove('r-dropdown--active')
  active.value = false
}

/**
 * @description - Selects an option
 * @param e Click event
 * @param option Selected option
 */
function selectOption(e: any, option: Option, hide: any, updatePosition: any) {
  updatePosition()
  if (option.disabled)
    return
  if (option.value === 'select-all') {
    selectAll()
    return
  }
  if (props.multiple) {
    if (!selectedMultiple.value.find(opt => opt.value === option.value)) {
      selectedMultiple.value.push(option)
    }

    else {
      selectedMultiple.value.splice(selectedMultiple.value.indexOf(option), 1)
      emit('removeOption', option)
    }

    inputModel.value = ''
    if (props.searchable)
      input.value?.focus()
    return
  }

  selectOneOption(e, option)

  if (props.closeOnSelect)
    hide()
}
/**
 * @description - Selects one option
 * @param e option Selected option
 */
function selectOneOption(e: MouseEvent, option: Option) {
  if (selected.value.value === option.value && !props.disableDeselect) {
    selected.value = {} as Option
    inputModel.value = ''
    emit('update:modelValue', '')
    emit('removeOption', option)
    return
  }

  inputModel.value = option.label
  selected.value = option
  emit('update:modelValue', option)
}
/**
 * @description - Removes an option from the selected options
 * @param e option Option to remove
 */
function removeOption(e: MouseEvent | KeyboardEvent, option: Option, updatePosition?: () => void) {
  e.stopPropagation()
  if (updatePosition)
    updatePosition()
  if (inputModel.value !== '')
    return
  const index = selectedMultiple.value.findIndex(opt => opt.value === option.value)
  selectedMultiple.value.splice(index, 1)
  emit('removeOption', option)
}
/**
 * @description - Handles the not existing options
 */
function createTag(e: KeyboardEvent, updatePosition: any) {
  if (!props.multiple)
    return
  e.stopPropagation()
  updatePosition()
  const value = inputModel.value
  if (value === '')
    return
  const option = mutatedOptions.value.find((opt: Option) => opt.label === value)
  if (!option) {
    selectedMultiple.value.push({ value, label: value })
    inputModel.value = ''
    input.value?.focus()
  }
}
function isSelected(option: Option) {
  if (!option || option?.value === undefined || option?.value === null)
    return false
  if (props.multiple)
    return selectedMultiple.value.find(opt => opt?.value === option?.value)

  return selected.value?.value === option?.value
}
/**
 * @description Filtered options based on the search input
 * @returns {Option[]} Returns an array of latest options
 */
const filteredOptions = computed<Option[]>(() => {
  if (!props.searchable || selected.value.label === inputModel.value)
    return mutatedOptions.value
  const result = mutatedOptions.value.filter((option: Option) => {
    return option.label.toLowerCase().includes(inputModel.value.toLowerCase())
  })
  return result
})

const isReadOnly = computed(() => {
  return !props.searchable
})

function reset() {
  if (mutatedModel.value) {
    if (props.multiple) {
      selectedMultiple.value = mutatedModel.value as Option[]
    }
    else {
      selected.value = mutatedModel.value as Option
      inputModel.value = (mutatedModel.value as Option).label
    }
  }
  else {
    selected.value = {} as Option
    selectedMultiple.value.splice(0, selectedMultiple.value.length)
  }
}

function handleInput(updatePosition: any) {
  if (props.searchable)
    updatePosition()

  if (props.multiple)
    return

  if (inputModel.value === '') {
    selected.value = {} as Option
    emit('update:modelValue', '')
    emit('removeOption', selected.value)
  }
}

function handleClearable(e: MouseEvent, updatePosition: any) {
  e.stopPropagation()
  updatePosition()
  if (props.multiple) {
    selectedMultiple.value.splice(0, selectedMultiple.value.length)
    emit('clear', selectedMultiple.value)
    return
  }

  selected.value = {} as Option
  inputModel.value = ''
  emit('update:modelValue', '')

  emit('clear', selected.value)
}

function selectAll() {
  if (selectedMultiple.value.length === filteredOptions.value.length) {
    selectedMultiple.value.splice(0, selectedMultiple.value.length)
    return
  }
  selectedMultiple.value = filteredOptions.value
}

const visibleSelectedOptions = computed(() => {
  if (!props.multiple || !Array.isArray(props.modelValue))
    return []
  return props.modelValue.slice(0, props.maxVisibleChips)
})

const remainingOptionsCount = computed(() => {
  if (!props.multiple || !Array.isArray(props.modelValue))
    return 0
  return Math.max(0, props.modelValue.length - props.maxVisibleChips)
})

onMounted(() => {
  reset()
  if (navigator.userAgent.includes('iPhone')) {
    // @ts-expect-error - iOS viewport fix
    document.querySelector('[name=viewport]').setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1')
  }
})

/**
 * @description - Watch the selected multiple options
 * @returns void
 */
watch(selectedMultiple, (option) => {
  emit('update:modelValue', option)
},
{
  deep: true,
})

watch(() => mutatedModel.value, (_value) => {
  reset()
})
</script>

<script lang="ts">
export default {
  name: 'RDropdown',
  components: {
    Chip,
    Icon,
    RTooltip,
  },
}
</script>

<template>
  <div ref="wrapper" class="r-dropdown-wrapper">
    <RTooltip
      :auto-hide="false"
      :offset="0"
      placement="bottom"
      resizable
      :tooltip-class="['w-full', props.tooltipClass]"
      trigger-class="w-full"
      :triggers="['click']"
      type="dropdown"
      @hide="($event) => {
        removeActive($event)
      }"
    >
      <template #default="{ updatePosition, tooltipId }">
        <div
          :id="tooltipId"
          ref="dropdown"
          class="r-dropdown"
          :class="{
            'r-dropdown--disabled': props.disabled,
            'r-dropdown--loading': props.loading,
            [props.dropdownClass]: props.dropdownClass,
            'r-dropdown--error': props.errorMsg,
            'group': inputModel !== '' || selectedMultiple.length,
          }"
          role="select"
          @click="toggleActive(tooltipId)"
        >
          <div
            v-if="props.prependIcon || $slots.prepend"
            class="r-dropdown__prepend-icon"
            :class="{
              'r-dropdown__prepend-icon--active': active,
              'r-dropdown__prepend-icon--error': props.errorMsg,
            }"
          >
            <slot
              :active="active"
              :disabled="props.disabled"
              :error="props.errorMsg.length"
              :loading="props.loading"
              name="prepend"
            >
              <Icon v-if="props.prependIcon" :name="props.prependIcon" />
            </slot>
          </div>

          <div class="r-dropdown__selections">
            <slot
              name="selection"
              :remove-option="removeOption"
              :selected="selectedMultiple"
            >
              <div class="flex flex-wrap items-center gap-2">
                <template v-if="props.multiple && props.chips">
                  <template v-for="option in visibleSelectedOptions" :key="option.value">
                    <div class="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-800">
                      {{ option.label }}
                      <span
                        class="material-icons cursor-pointer text-sm"
                        @click.stop="(e) => removeOption(e, option, updatePosition)"
                      >
                        close
                      </span>
                    </div>
                  </template>
                  <span v-if="remainingOptionsCount > 0" class="text-sm text-gray-600">
                    +{{ remainingOptionsCount }}
                  </span>
                </template>
              </div>
            </slot>

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
          </div>

          <div
            v-if="props.clearable"
            class="r-dropdown__clearable"
            :data-has-value="
              (inputModel !== '' || selectedMultiple.length)
                && active
            "
            @click="handleClearable($event, updatePosition)"
          >
            <slot name="clearable">
              <Icon
                name="mdiCloseCircle"
                size="18"
              />
            </slot>
          </div>
          <div
            v-if="props.appendIcon || $slots.append"
            class="r-dropdown__append-icon"
            :class="{
              'r-dropdown__append-icon--active': active,
              'r-dropdown__append-icon--error': props.errorMsg,
            }"
          >
            <slot
              :active="active"
              :disabled="props.disabled"
              :error="props.errorMsg.length"
              :loading="props.loading"
              name="append"
            >
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
            v-if="props.showSelectAll && props.multiple && filteredOptions.length > 0"
            class="r-dropdown-options__option"
            :class="{
              'r-dropdown-options__option--active': selectedMultiple.length === filteredOptions.length,
              'r-dropdown-options__option--disabled': false,
            }"
            @click.prevent="selectOption($event, { label: props.selectAllText, value: 'select-all' }, hide, updatePosition)"
          >
            <div class="flex items-center">
              <p
                class="r-dropdown-options__option__label"
              >
                {{ props.selectAllText }}
              </p>
            </div>
            <Icon
              v-if="selectedMultiple.length === filteredOptions.length && !props.hideOptionCheckIcon"
              class="r-dropdown-options__option__append-icon"
              :class="{
                'r-dropdown-options__option__append-icon--active':
                  selectedMultiple.length === filteredOptions.length,
              }"
              name="mdiCheck"
            />
          </li>
          <hr v-if="props.showSelectAll && filteredOptions.length > 0" class="r-dropdown-options__divider">
          <li
            v-for="option in filteredOptions"
            :key="option.value"
            :aria-disabled="option.disabled"
            class="r-dropdown-options__option"
            :class="{
              'r-dropdown-options__option--active': isSelected(option),
              'r-dropdown-options__option--disabled': option.disabled,
              'r-dropdown-options__option--deselect': isSelected(option) && props.disableDeselect,
            }"
            @click.prevent="selectOption($event, option, hide, updatePosition)"
          >
            <slot
              :disabled="option.disabled"
              :is-selected="isSelected(option)"
              :item="option"
              name="option"
            >
              <div class="flex items-center">
                <slot :disabled="option.disabled" :is-selected="isSelected(option)" name="option-prepend">
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
              <slot :disabled="option.disabled" :is-selected="isSelected(option)" name="option-append">
                <Icon
                  v-if="isSelected(option) && !props.hideOptionCheckIcon"
                  class="r-dropdown-options__option__append-icon"
                  :class="{
                    'r-dropdown-options__option__append-icon--active':
                      isSelected(option),
                  }"
                  name="mdiCheck"
                />
              </slot>
            </slot>
          </li>
          <li v-if="filteredOptions.length === 0" class="r-dropdown-options__no-option">
            <slot name="not-options">
              {{ props.noOptionsText }}
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
