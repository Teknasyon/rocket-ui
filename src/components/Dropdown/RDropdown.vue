<script setup lang="ts">
import { computed, defineEmits, onMounted, onUnmounted, ref, watch } from 'vue'
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

/**
 * Scroll locking for open dropdowns (shared per scroll container via dataset)
 * Note: Targets are now automatically tracked in lockScroll/unlockScroll functions
 */

function isScrollable(element: HTMLElement) {
  const style = window.getComputedStyle(element)
  return /(auto|scroll|overlay)/.test(style.overflowY)
}

function findNearestScrollParent(element: HTMLElement | null): HTMLElement {
  let current: HTMLElement | null = element
  while (current && current !== document.body) {
    if (isScrollable(current))
      return current
    current = current.parentElement
  }
  return document.body as HTMLElement
}

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

  const [optionKey] = Object.keys(option as any)

  return ['label', 'value']?.includes(optionKey)
}

const mutatedOptions = computed(() => {
  const options = props.options
  if (!isObject(options[0])) {
    return options.map((option: string) => ({
      value: option,
      label: String(option),
    }))
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

// Store the hide function from tooltip slot
const tooltipHideFunction = ref<((e?: Event | null) => void) | null>(null)

function setTooltipHideFunction(hideFunc: (e?: Event | null) => void) {
  tooltipHideFunction.value = hideFunc
}

// Store the scroll parent for this dropdown instance
const scrollParent = ref<HTMLElement | null>(null)

function manageScrollLock(): void {
  // Find scroll parent if not already found
  if (!scrollParent.value) {
    const referenceElement = wrapper.value || dropdown.value
    if (referenceElement)
      scrollParent.value = findNearestScrollParent(referenceElement)
  }

  if (!scrollParent.value)
    return

  if (active.value) {
    // Lock scroll when dropdown is active
    if (!scrollParent.value.dataset.rOriginalOverflow) {
      scrollParent.value.dataset.rOriginalOverflow = scrollParent.value.style.overflowY || ''
      scrollParent.value.style.overflowY = 'hidden'
    }
  }
  else {
    // Unlock scroll when dropdown is inactive
    if (scrollParent.value.dataset.rOriginalOverflow !== undefined) {
      scrollParent.value.style.overflowY = scrollParent.value.dataset.rOriginalOverflow
      delete scrollParent.value.dataset.rOriginalOverflow
    }
  }
}

/**
 * @description - Handles the appearance of the select list
 */
function toggleActive(id: string) {
  if (props.disabled)
    return

  const dropdownWithId = document.getElementById(id)

  const otherDropdowns = document.querySelectorAll('.r-dropdown--active')

  otherDropdowns.forEach((otherDropdown) => {
    if (
      otherDropdown.id !== dropdown.value?.id
      && otherDropdown.classList.contains('r-dropdown--active')
    ) {
      // unlock scroll for the container of the other dropdown being closed
      const otherScrollParent = findNearestScrollParent(
        otherDropdown as HTMLElement,
      )
      if (otherScrollParent && otherScrollParent.dataset.rOriginalOverflow !== undefined) {
        otherScrollParent.style.overflowY = otherScrollParent.dataset.rOriginalOverflow
        delete otherScrollParent.dataset.rOriginalOverflow
      }
      otherDropdown.childNodes.forEach((child: any) => {
        if (child?.classList) {
          Object?.values(child?.classList)
            .filter((cls: any) => cls.includes('--active'))
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
 * @description - Handles overlay click to close dropdown
 */
function handleOverlayClick() {
  tooltipHideFunction.value?.()
}

/**
 * @description - Selects an option
 * @param e Click event
 * @param option Selected option
 */
function selectOption(e: any, option: Option, hide: any, updatePosition: any) {
  if (props.disabled || option.disabled)
    return
  updatePosition()
  if (option.value === 'select-all') {
    selectAll()
    return
  }
  if (props.multiple) {
    if (!selectedMultiple.value.find(opt => opt.value === option.value)) {
      selectedMultiple.value.push(option)
    }
    else {
      const index = selectedMultiple.value.findIndex(
        opt => opt.value === option.value,
      )
      selectedMultiple.value.splice(index, 1)
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
function removeOption(
  e: MouseEvent | KeyboardEvent,
  option: Option,
  updatePosition: any,
) {
  if (e instanceof KeyboardEvent && e.key !== 'Backspace')
    return
  if (inputModel.value !== '')
    return
  e.stopPropagation()
  updatePosition()
  const index = selectedMultiple.value.findIndex(
    opt => opt.value === option.value,
  )
  selectedMultiple.value.splice(index, 1)
  emit('removeOption', option)
  emit('update:modelValue', selectedMultiple.value)
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
  const option = mutatedOptions.value.find(
    (opt: Option) => opt.label === value,
  )
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
    document
      .querySelector('[name=viewport]')
      .setAttribute(
        'content',
        'width=device-width, initial-scale=1, maximum-scale=1',
      )
  }
})

/**
 * @description - Watch the selected multiple options
 * @returns void
 */
watch(
  selectedMultiple,
  (option) => {
    emit('update:modelValue', option)
  },
  {
    deep: true,
  },
)

watch(
  () => mutatedModel.value,
  (_value) => {
    reset()
  },
)

watch(
  () => active.value,
  () => {
    manageScrollLock()
  },
)

onUnmounted(() => {
  // Clean up scroll lock when component unmounts
  if (scrollParent.value && scrollParent.value.dataset.rOriginalOverflow !== undefined) {
    scrollParent.value.style.overflowY = scrollParent.value.dataset.rOriginalOverflow
    delete scrollParent.value.dataset.rOriginalOverflow
  }
})
</script>

<template>
  <div :id="id" ref="wrapper" class="r-dropdown-wrapper">
    <!-- Overlay teleported to body -->
    <Teleport to="body">
      <div
        v-if="active"
        :id="`${id}-overlay`"
        class="r-dropdown-overlay"
        @click="handleOverlayClick"
      />
    </Teleport>
    <RTooltip
      :id="`${id}-tooltip`"
      :auto-hide="false"
      :disabled="props.disabled"
      :offset="0"
      placement="bottom"
      resizable
      :tooltip-class="['w-full', props.tooltipClass]"
      trigger-class="w-full"
      :triggers="['click']"
      type="dropdown"
      @hide="
        ($event) => {
          removeActive($event);
        }
      "
    >
      <template #default="{ updatePosition, tooltipId }">
        <div
          :id="`${id}-dropdown`"
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
            :id="`${id}-prepend-icon`"
            class="r-dropdown__prepend-icon"
            :class="{
              'r-dropdown__prepend-icon--active': active,
              'r-dropdown__prepend-icon--error': props.errorMsg,
            }"
          >
            <slot
              :id="`${id}-prepend-icon`"
              :active="active"
              :disabled="props.disabled"
              :error="props.errorMsg.length"
              :loading="props.loading"
              name="prepend"
            >
              <Icon
                v-if="props.prependIcon"
                :id="`${id}-prepend-icon`"
                :name="props.prependIcon"
              />
            </slot>
          </div>

          <div :id="`${id}-selections`" class="r-dropdown__selections">
            <slot
              :id="`${id}-selection`"
              name="selection"
              :remove-option="removeOption"
              :selected="selectedMultiple"
            >
              <div
                :id="`${id}-selections-content`"
                class="flex flex-wrap items-center gap-2 text-sm"
              >
                <template v-if="props.multiple && props.chips">
                  <template
                    v-for="option in visibleSelectedOptions"
                    :key="option.value"
                  >
                    <Chip
                      :id="`${id}-chip-${option.value}`"
                      clearable
                      ghost
                      :label="option.label"
                      variant="primary"
                      @click:close="
                        (e) => removeOption(e, option, updatePosition)
                      "
                    />
                  </template>
                  <slot
                    :id="`${id}-remaining-count`"
                    :count="remainingOptionsCount"
                    name="remaining-count"
                  >
                    <span
                      v-if="remainingOptionsCount > 0"
                      :id="`${id}-remaining-count-text`"
                      class="r-dropdown__remaining-count-text"
                    >
                      +{{ remainingOptionsCount }}
                    </span>
                  </slot>
                </template>
                <template v-else-if="props.multiple">
                  <span
                    v-for="(option, index) in selectedMultiple"
                    :id="`${id}-selected-option-${index}`"
                    :key="option.value"
                  >
                    {{ option.label }}
                    {{ index < selectedMultiple.length - 1 ? ', ' : '' }}
                  </span>
                </template>
              </div>
            </slot>

            <input
              :id="`${id}`"
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
                removeOption(
                  $event,
                  selectedMultiple[selectedMultiple.length - 1],
                  updatePosition,
                )
              "
              @keydown.enter="createTag($event, updatePosition)"
            >
          </div>

          <div
            v-if="props.clearable"
            :id="props.id ? `${props.id}-clearable-icon` : 'clearable-icon'"
            class="r-dropdown__clearable"
            :data-has-value="
              (inputModel !== '' || selectedMultiple.length) && active
            "
            @click="handleClearable($event, updatePosition)"
          >
            <slot name="clearable">
              <Icon
                :id="`${id}-clearable-icon`"
                name="mdiCloseCircle"
                size="18"
              />
            </slot>
          </div>
          <div
            v-if="props.appendIcon || $slots.append"
            :id="`${id}-append-icon`"
            class="r-dropdown__append-icon"
            :class="{
              'r-dropdown__append-icon--active': active,
              'r-dropdown__append-icon--error': props.errorMsg,
            }"
          >
            <slot
              :id="`${id}-append-icon`"
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
        <!-- Set the tooltip hide function to the dropdown -->
        {{ setTooltipHideFunction(hide) }}
        <ul
          :id="`${id}-options`"
          class="r-dropdown-options"
          :class="{
            'r-dropdown-options--active': active,
            [props.optionsClass]: props.optionsClass,
          }"
        >
          <li
            v-if="
              props.showSelectAll
                && props.multiple
                && filteredOptions.length > 0
            "
            class="r-dropdown-options__option"
            :class="{
              'r-dropdown-options__option--active':
                selectedMultiple.length === filteredOptions.length,
              'r-dropdown-options__option--disabled': false,
            }"
            @click.prevent="
              selectOption(
                $event,
                { label: props.selectAllText, value: 'select-all' },
                hide,
                updatePosition,
              )
            "
          >
            <div class="flex items-center">
              <p class="r-dropdown-options__option__label">
                {{ props.selectAllText }}
              </p>
            </div>
            <Icon
              v-if="
                selectedMultiple.length === filteredOptions.length
                  && !props.hideOptionCheckIcon
              "
              class="r-dropdown-options__option__append-icon"
              :class="{
                'r-dropdown-options__option__append-icon--active':
                  selectedMultiple.length === filteredOptions.length,
              }"
              name="mdiCheck"
            />
          </li>
          <hr
            v-if="props.showSelectAll && filteredOptions.length > 0"
            :id="`${id}-divider`"
            class="r-dropdown-options__divider"
          >
          <li
            v-for="option in filteredOptions"
            :id="`${id}-option-${option.value}`"
            :key="option.value"
            :aria-disabled="option.disabled"
            class="r-dropdown-options__option"
            :class="{
              'r-dropdown-options__option--active': isSelected(option),
              'r-dropdown-options__option--disabled': option.disabled,
              'r-dropdown-options__option--deselect':
                isSelected(option) && props.disableDeselect,
            }"
            @click.prevent="selectOption($event, option, hide, updatePosition)"
          >
            <slot
              :id="`${id}-option-${option.value}`"
              :disabled="option.disabled"
              :is-selected="isSelected(option)"
              :item="option"
              name="option"
            >
              <div
                :id="`${id}-option-content-${option.value}`"
                class="flex items-center"
              >
                <slot
                  :id="`${id}-option-prepend-${option.value}`"
                  :disabled="option.disabled"
                  :is-selected="isSelected(option)"
                  name="option-prepend"
                >
                  <Icon
                    v-if="option.prependIcon"
                    :id="`${id}-option-prepend-icon-${option.value}`"
                    class="r-dropdown-options__option__prepend-icon"
                    :class="{
                      'r-dropdown-options__option__prepend-icon--active':
                        isSelected(option),
                    }"
                    :name="option.prependIcon"
                  />
                </slot>
                <p
                  :id="`${id}-option-label-${option.value}`"
                  class="r-dropdown-options__option__label"
                  :class="{
                    'r-dropdown-options__option__label--active':
                      isSelected(option),
                  }"
                >
                  {{ option.label }}
                </p>
              </div>
              <slot
                :id="`${id}-option-append-${option.value}`"
                :disabled="option.disabled"
                :is-selected="isSelected(option)"
                name="option-append"
              >
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
          <li
            v-if="filteredOptions.length === 0"
            :id="`${id}-no-option`"
            class="r-dropdown-options__no-option"
          >
            <slot name="not-options">
              {{ props.noOptionsText }}
            </slot>
          </li>
        </ul>
      </template>
    </RTooltip>
    <div
      v-if="!$props.hideDetails"
      :id="`${id}-details`"
      class="r-dropdown-details"
    >
      <div v-if="props.errorMsg" :id="`${id}-error`" class="r-dropdown-error">
        {{ props.errorMsg }}
      </div>
      <div v-if="props.hint" :id="`${id}-hint`" class="r-dropdown-hint">
        {{ props.hint }}
      </div>
    </div>
  </div>
</template>
