<script setup lang="ts">
import './radio.css'
import { computed, defineProps, ref, watch } from 'vue'

export interface Props {
  id: string
  modelValue?: boolean
  name?: string
  disabled?: boolean
  label?: string
  hint?: string
  errorMsg?: string
  title?: string
  value?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  modelValue: false,
  name: 'radio-group',
  disabled: false,
  label: '',
  hint: '',
  errorMsg: '',
  title: '',
  value: '',
})

// Emits 'update:modelValue' event when the value changes
defineEmits(['update:modelValue'])

const componentId = computed(() => {
  return props.id || 'r-radio'
})
const checked = ref(props.modelValue)

// Classes to control the radio's styling
const classes = computed(() => [
  'r-radio group',
  {
    'r-radio--disabled': props.disabled,
    'r-radio--error': props.errorMsg,
  },
])

// Watch for changes in modelValue and update the checked ref
watch(() => props.modelValue, (newVal) => {
  checked.value = newVal
}, { immediate: true })
</script>

<template>
  <div :id="componentId" :class="classes">
    <input
      v-bind="$attrs"
      :id="`${componentId}-input`"
      :checked="checked"
      class="r-radio__input"
      :disabled="props.disabled"
      :name="props.name"
      type="radio"
      :value="props.value"
      @change="$emit('update:modelValue')"
    >

    <span
      :id="`${componentId}-label`"
      class="r-radio__label"
      :class="[props.errorMsg && 'r-radio__label--error']"
      @click="$emit('update:modelValue')"
    >
      <span
        :id="`${componentId}-custom`"
        class="r-radio__custom"
        :class="[props.errorMsg && 'r-radio__custom--error', props.disabled && 'r-radio__custom--disabled']"
      />
      <div class="flex flex-col">
        <span
          v-if="props.title"
          :id="`${componentId}-title`"
          class="r-radio__title"
          :class="[props.errorMsg && 'r-radio__title--error', props.disabled && 'r-radio__title--disabled']"
        >
          {{ props.title }}
        </span>
        <span>
          {{ props.label }}
        </span>
      </div>
    </span>
    <span
      v-if="props.hint && !props.errorMsg"
      :id="`${componentId}-hint`"
      class="r-radio__hint"
      :class="[props.disabled && 'r-radio__hint--disabled']"
    >{{ props.hint }}</span>

    <!-- Display error message if it exists -->
    <span v-if="props.errorMsg" :id="`${componentId}-error`" class="r-radio__error">{{ props.errorMsg }}</span>
  </div>
</template>
