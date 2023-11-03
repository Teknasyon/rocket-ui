<script setup lang="ts">
import './alert.css'
import { computed } from 'vue'
import Icon from '../Icon/RIcon.vue'

export interface Props {
  /**
   * Type of the Alert
   * @type 'success' | 'error' | 'warning' | 'info'
   * @default 'info'
   * @example
   * <Alert type="success" />
   */
  type: 'success' | 'error' | 'warning' | 'info'

  /**
   * Title of the Alert
   * @type string
   * @default ''
   * @example
   * <Alert title="Title" />
   */
  title: string

  /**
   * Variant of the Alert
   * @type 'solid' | 'outline' | 'ghost'
   * @default 'ghost'
   * @example
   * <Alert variant="ghost" />
   */
  variant?: 'solid' | 'outline' | 'ghost'

  /**
   * Description of the Alert
   * @type string
   * @default ''
   * @example
   * <Alert description="Description" />
   */
  description?: string

  /**
   * Allow to close the Alert
   * @type boolean
   * @default true
   * @example
   * <Alert closable />
   */
  closable?: boolean

  /**
   * Block appearance of the Alert
   * @type boolean
   * @default false
   * @example
   * <Alert block />
   */
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  title: '',
  variant: 'ghost',
  description: '',
  closable: true,
  block: false,
})
const emit = defineEmits(['close'])
const classes = computed(() => {
  return {
    ' r-alert': true,
    [`r-alert--${props.variant}`]: true,
    'r-alert--block': props.block,
    [`r-alert--${props.variant}--${props.type}`]: true,
  }
})

const icon = computed(() => {
  return {
    success: 'mdiCheckCircle',
    error: 'mdiAlertCircle',
    warning: 'mdiAlert',
    info: 'mdiInformation',
  }[props.type]
})

function close() {
  emit('close')
}
</script>

<template>
  <div :class="classes">
    <div class="r-alert__icon">
      <slot name="alert-icon">
        <Icon :name="icon" :size="24" />
      </slot>
    </div>
    <div class="r-alert__content">
      <slot name="content">
        <p class="r-alert__content__title">
          {{ props.title }}
        </p>
        <p v-if="props.description" class="r-alert__content__description">
          {{ props.description }}
        </p>
      </slot>
    </div>
    <div v-if="props.closable" class="r-alert__close">
      <slot name="custom-close">
        <Icon
          class="r-alert__close__button"
          name="mdiClose"
          :size="16"
          @click="close"
        />
      </slot>
    </div>
  </div>
</template>
