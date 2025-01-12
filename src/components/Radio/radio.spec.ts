import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from './RRadio.vue'

describe('Radio', () => {
  const defaultProps = {
    id: 'radio-id',
    label: 'Radio label',
    value: 'test-value',
  }

  it('renders properly with basic props', () => {
    const wrapper = mount(Radio, {
      props: defaultProps,
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('label').exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('Radio label')
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').attributes('id')).toBe('radio-id')
    expect(wrapper.find('input').attributes('type')).toBe('radio')
    expect(wrapper.find('input').attributes('value')).toBe('test-value')
  })

  it('handles v-model updates', async () => {
    const wrapper = mount(Radio, {
      props: {
        ...defaultProps,
        modelValue: '',
      },
    })

    const input = wrapper.find('input')
    await input.setValue(true)
    await wrapper.setProps({ modelValue: 'test-value' })

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test-value'])
    expect(wrapper.find('.r-radio').classes()).toContain('r-radio--checked')
  })

  it('shows error message and applies error styles', () => {
    const wrapper = mount(Radio, {
      props: {
        ...defaultProps,
        errorMsg: 'This is an error message',
      },
    })

    const errorMessage = wrapper.find('.r-radio-texts__error')
    expect(errorMessage.exists()).toBe(true)
    expect(errorMessage.text()).toBe('This is an error message')
    expect(wrapper.find('.r-radio').classes()).toContain('r-radio--error')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('shows hint message when provided', () => {
    const wrapper = mount(Radio, {
      props: {
        ...defaultProps,
        hint: 'This is a hint message',
      },
    })

    const hintMessage = wrapper.find('.r-radio-texts__hint')
    expect(hintMessage.exists()).toBe(true)
    expect(hintMessage.text()).toBe('This is a hint message')
    expect(wrapper.find('input').attributes('aria-describedby')).toBe('radio-id-hint')
  })

  it('handles disabled state properly', () => {
    const wrapper = mount(Radio, {
      props: {
        ...defaultProps,
        disabled: true,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBe('')
    expect(wrapper.find('.r-radio').attributes('data-disabled')).toBe('true')
    expect(input.attributes('aria-disabled')).toBe('true')
  })

  it('handles required state properly', () => {
    const wrapper = mount(Radio, {
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

  it('applies proper ARIA attributes', () => {
    const wrapper = mount(Radio, {
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
    expect(input.attributes('aria-describedby')).toBe('radio-id-error')
  })

  it('handles keyboard interaction', async () => {
    const wrapper = mount(Radio, {
      props: defaultProps,
    })

    const input = wrapper.find('input')
    await input.trigger('keydown.space')
    await input.trigger('change')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('respects name attribute for radio group', () => {
    const wrapper = mount(Radio, {
      props: {
        ...defaultProps,
        name: 'test-group',
      },
    })

    expect(wrapper.find('input').attributes('name')).toBe('test-group')
  })

  it('prevents interaction when disabled', async () => {
    const wrapper = mount(Radio, {
      props: {
        ...defaultProps,
        disabled: true,
      },
    })

    const input = wrapper.find('input')
    await input.trigger('change')

    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
})
