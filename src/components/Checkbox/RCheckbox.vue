<script setup lang="ts">
import './checkbox.css';
import {
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  computed,
  reactive,
  watch,
} from 'vue';

import Icon from '../Icon/RIcon.vue';

export interface Props {
  /**
   * id of the checkbox
   * @type {HTMLAttributes['id']}
   * @default ''
   * @example
   * <Checkbox id="checkbox" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   */
  id: HTMLAttributes['id']

  /**
   * Input checked state
   * @type {InputHTMLAttributes['checked']}
   * @default false
   * @example
   * <Checkbox :modelValue="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#checked
   */
  modelValue?: InputHTMLAttributes['checked']

  /**
   * label of the checkbox
   * @type {LabelHTMLAttributes['label']}
   * @default ''
   * @example
   * <Checkbox label="Checkbox" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
   */
  label?: LabelHTMLAttributes['for']

  /**
   * Input indeterminate state
   * @type {InputHTMLAttributes['indeterminate']}
   * @default false
   * @example
   * <Checkbox indeterminate="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate
   */
  indeterminate?: InputHTMLAttributes['indeterminate']

  /**
   * Input disabled state
   * @type {InputHTMLAttributes['disabled']}
   * @default false
   * @example
   * <Checkbox disabled="true" />
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#disabled
   */
  disabled?: InputHTMLAttributes['disabled']

  /**
   * Hint text
   * @type {string}
   * @default ''
   * @example
   * <Checkbox hint="This is a hint" />
   */
  hint?: string

  /**
   * Error message
   * @type {string}
   * @default ''
   * @example
   * <Checkbox errorMsg="This is an error" />
   */
  errorMsg?: string

  /**
   * Hide the hint and error message
   * @type {boolean}
   * @default false
   * @example
   * <Checkbox hideDetails />
   */
  hideDetails?: boolean
}

interface StateTypes {
  checked: InputHTMLAttributes['checked']
  indeterminate: InputHTMLAttributes['indeterminate']
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  label: '',
  indeterminate: false,
  disabled: false,
  hint: '',
  errorMsg: '',
  modelValue: false,
});

const emit = defineEmits(['update:modelValue']);

const state = reactive<StateTypes>({
  checked: false,
  indeterminate: false,
});

const icons = {
  checked: 'mdiCheck',
  unchecked: '',
  indeterminate: 'mdiMinus',
};

const icon = computed(() => {
  if (state.indeterminate)
    return icons.indeterminate;

  return state.checked ? icons.checked : icons.unchecked;
});

const classes = computed(() => {
  return {
    'r-checkbox': true,
    'r-checkbox--checked': state.checked,
    'r-checkbox--disabled': props.disabled,
    'r-checkbox--indeterminate': state.indeterminate,
    'r-checkbox--error': !!props.errorMsg,
  };
});

function onChange(e: unknown) {
  if (props.disabled)
    return;
  // @ts-expect-error: Unreachable code error
  state.checked = e.target.checked;
  state.indeterminate = false;
  emit('update:modelValue', state.checked);
}

watch(
  () => props.indeterminate,
  (value) => {
    state.indeterminate = value;
    if (value === true) {
      state.checked = false;
      emit('update:modelValue', state.checked);
    }
  },
  {
    // need immediate to set the state on first render for storybook
    // TODO: find a better way to do this
    immediate: true,
  }
);
watch(
  () => props.modelValue,
  (value) => {
    state.checked = value;
  },
  {
    // need immediate to set the state on first render for storybook
    // TODO: find a better way to do this
    immediate: true,
  }
);
</script>

<template>
  <div class="r-checkbox-wrapper">
    <div class="r-checkbox-container">
      <input
        :id="props.id"
        :checked="state.checked"
        class="r-checkbox-container__input"
        :disabled="props.disabled"
        :indeterminate="state.indeterminate"
        type="checkbox"
        @change="onChange"
      >
      <div :class="classes" :data-disabled="props.disabled">
        <Icon :name="icon" :size="24" />
      </div>
    </div>
    <div class="r-checkbox-texts">
      <label class="r-checkbox-texts__label" :data-disabled="props.disabled" :for="props.id">
        {{ props.label }}
      </label>
      <div v-if="!props.hideDetails" class="r-checkbox-texts__details">
        <p v-if="!!props.errorMsg" class="r-checkbox-texts__error">
          {{ props.errorMsg }}
        </p>
        <p v-else class="r-checkbox-texts__hint">
          {{ props.hint }}
        </p>
      </div>
    </div>
  </div>
</template>
