<script setup lang="ts">
import './sidebar.css'

export interface RSidebarProps {
  modelValue: boolean
  showTrigger?: boolean
  class?: string | string[]
  triggerClass?: string | string[]
  wrapperClass?: string | string[]

  /**
   * Id of the Sidebar
   * @type string
   * @default 'r-sidebar'
   * @example
   * <Sidebar id="custom-sidebar" />
   */
  id?: string
}

const props = withDefaults(defineProps<RSidebarProps>(), {
  modelValue: false,
  showTrigger: true,
  id: 'r-sidebar',
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div
    :id="id"
    class="r-sidebar__wrapper"
    :class="[$props.wrapperClass]"
    :data-open="props.modelValue"
  >
    <aside
      :id="`${id}-aside`"
      class="r-sidebar"
      :class="[props.class]"
      :data-open="props.modelValue"
    >
      <slot :open="props.modelValue" />
    </aside>
    <div
      v-if="props.showTrigger"
      :id="`${id}-trigger`"
      class="r-sidebar__trigger"
      :class="[props.triggerClass]"
      :data-open="props.modelValue"
      @click="emit('update:modelValue', !props.modelValue)"
    >
      <slot :id="`${id}-trigger-slot`" name="trigger" :open="props.modelValue">
        >
      </slot>
    </div>
  </div>
</template>
