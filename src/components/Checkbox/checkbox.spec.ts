import { describe, expect, it, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import Checkbox from './RCheckbox.vue'

// Mock the Icon component
vi.mock('../Icon/RIcon.vue', () => ({
  default: {
    name: 'Icon',
    template: '<span class="mock-icon" />',
  },
}))

describe('Checkbox', () => {
  const defaultProps = {
    id: 'checkbox-id',
    label: 'Checkbox label',
  }

  it('renders properly with basic props', () => {
    const wrapper = mount(Checkbox, {
      props: defaultProps,
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('label').exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('Checkbox label')
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').attributes('id')).toBe('checkbox-id')
    expect(wrapper.find('input').attributes('type')).toBe('checkbox')
  })

  it('handles v-model updates', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        ...defaultProps,
        modelValue: false,
      },
    })

    const input = wrapper.find('input')
    await input.setValue(true)

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
    expect(input.element.checked).toBe(true)
  })

  it('shows error message and applies error styles', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        ...defaultProps,
        errorMsg: 'This is an error message',
      },
    })

    const errorMessage = wrapper.find('.r-checkbox-texts__error')
    expect(errorMessage.exists()).toBe(true)
    expect(errorMessage.text()).toBe('This is an error message')
    expect(wrapper.find('.r-checkbox').classes()).toContain('r-checkbox--error')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('shows hint message when provided', () => {
    const wrapper = mount(Checkbox, {
      props: {
        ...defaultProps,
        hint: 'This is a hint message',
      },
    })

    const hintMessage = wrapper.find('.r-checkbox-texts__hint')
    expect(hintMessage.exists()).toBe(true)
    expect(hintMessage.text()).toBe('This is a hint message')
    expect(wrapper.find('input').attributes('aria-describedby')).toBe('checkbox-id-hint')
  })

  it('handles disabled state properly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        ...defaultProps,
        disabled: true,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBe('')
    expect(wrapper.find('.r-checkbox').attributes('data-disabled')).toBe('true')
    expect(input.attributes('aria-disabled')).toBe('true')
  })

  it('handles required state properly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        ...defaultProps,
        required: true,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('required')).toBe('')
    expect(input.attributes('aria-required')).toBe('true')
    expect(wrapper.find('.sr-only').exists()).toBe(true)
    expect(wrapper.find('.sr-only').text()).toBe('Required -')
  })

  it('handles indeterminate state properly', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        ...defaultProps,
        indeterminate: true,
      },
    })

    expect(wrapper.find('.r-checkbox').classes()).toContain('r-checkbox--indeterminate')
    expect(wrapper.find('input').attributes('aria-checked')).toBe('mixed')

    // Clicking should clear indeterminate state
    await wrapper.find('input').setValue(true)
    expect(wrapper.find('.r-checkbox').classes()).not.toContain('r-checkbox--indeterminate')
    expect(wrapper.find('input').attributes('aria-checked')).toBe(undefined)
  })

  it('handles keyboard interaction', async () => {
    const wrapper = mount(Checkbox, {
      props: defaultProps,
    })

    const input = wrapper.find('input')
    await input.trigger('keydown.space')
    await input.trigger('change')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('applies proper ARIA attributes', () => {
    const wrapper = mount(Checkbox, {
      props: {
        ...defaultProps,
        required: true,
        disabled: true,
        errorMsg: 'Error message',
        ariaLabel: 'Custom aria label',
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('aria-label')).toBe('Custom aria label')
    expect(input.attributes('aria-required')).toBe('true')
    expect(input.attributes('aria-disabled')).toBe('true')
    expect(input.attributes('aria-invalid')).toBe('true')
    expect(input.attributes('aria-describedby')).toBe('checkbox-id-error')
  })
})
