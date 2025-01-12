import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Textfield from './RTextfield.vue'

// Mock the Icon component
vi.mock('../Icon/RIcon.vue', () => ({
  default: {
    name: 'Icon',
    template: '<span class="mock-icon" />',
  },
}))

// Mock the Label component
vi.mock('../Label/RLabel.vue', () => ({
  default: {
    name: 'Label',
    template: '<label><slot /></label>',
    props: ['id', 'for', 'text'],
  },
}))

describe('Textfield', () => {
  const defaultProps = {
    id: 'textfield-id',
    type: 'text',
  }

  it('renders properly with basic props', () => {
    const wrapper = mount(Textfield, {
      props: {
        ...defaultProps,
        label: 'Textfield label',
        disabled: false,
        required: false,
        placeholder: 'Textfield placeholder',
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('label').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').element.getAttribute('id')).toBe('textfield-id')
    expect(wrapper.find('input').element.getAttribute('type')).toBe('text')
    expect(wrapper.find('input').element.getAttribute('disabled')).toBe(null)
    expect(wrapper.find('input').element.getAttribute('required')).toBe(null)
    expect(wrapper.find('input').element.getAttribute('placeholder')).toBe('Textfield placeholder')
  })

  it('handles v-model updates', async () => {
    const wrapper = mount(Textfield, {
      props: {
        ...defaultProps,
        modelValue: '',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('test value')

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test value'])
    expect(input.element.value).toBe('test value')
  })

  it('shows error message and applies error styles', async () => {
    const wrapper = mount(Textfield, {
      props: {
        ...defaultProps,
        errorMsg: 'This is an error message',
      },
    })

    await wrapper.vm.$nextTick()
    const errorMessage = wrapper.find('.r-textfield__error')
    expect(errorMessage.exists()).toBe(true)
    expect(errorMessage.text()).toBe('This is an error message')
    expect(wrapper.find('.r-textfield').classes()).toContain('r-textfield--error')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('shows hint message when provided', () => {
    const wrapper = mount(Textfield, {
      props: {
        ...defaultProps,
        hint: 'This is a hint message',
      },
    })

    const hintMessage = wrapper.find('.r-textfield__hint')
    expect(hintMessage.exists()).toBe(true)
    expect(hintMessage.text()).toBe('This is a hint message')
    expect(wrapper.find('input').attributes('aria-describedby')).toBe('textfield-id-hint')
  })

  it('handles disabled state properly', () => {
    const wrapper = mount(Textfield, {
      props: {
        ...defaultProps,
        disabled: true,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBe('')
    expect(wrapper.find('.r-textfield').classes()).toContain('r-textfield--disabled')
    expect(input.attributes('aria-disabled')).toBe('true')
  })

  it('handles required state properly', () => {
    const wrapper = mount(Textfield, {
      props: {
        ...defaultProps,
        required: true,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('required')).toBe('')
    expect(input.attributes('aria-required')).toBe('true')
  })

  it('handles focus and blur events', async () => {
    const wrapper = mount(Textfield, {
      props: {
        ...defaultProps,
      },
    })

    const input = wrapper.find('input')
    await input.trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    expect(wrapper.find('.r-textfield').classes()).toContain('r-textfield--focus')

    await input.trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
    expect(wrapper.find('.r-textfield').classes()).not.toContain('r-textfield--focus')
  })

  it('handles clearable input', async () => {
    const wrapper = mount(Textfield, {
      props: {
        ...defaultProps,
        clearable: true,
        modelValue: 'test value',
      },
    })

    const clearIcon = wrapper.find('.mock-icon')
    expect(clearIcon.exists()).toBe(true)

    await clearIcon.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('click:clear')).toBeTruthy()
  })

  it('applies proper ARIA attributes', async () => {
    const wrapper = mount(Textfield, {
      props: {
        ...defaultProps,
        label: 'Textfield label',
        required: true,
        disabled: true,
        readonly: true,
        errorMsg: 'Error message',
        ariaLabel: 'Custom aria label',
      },
    })

    await wrapper.vm.$nextTick()
    const input = wrapper.find('input')
    expect(input.attributes('aria-label')).toBe('Custom aria label')
    expect(input.attributes('aria-required')).toBe('true')
    expect(input.attributes('aria-disabled')).toBe('true')
    expect(input.attributes('aria-readonly')).toBe('true')
    expect(input.attributes('aria-invalid')).toBe('true')
    expect(input.attributes('aria-describedby')).toBe('textfield-id-error')
  })
})
