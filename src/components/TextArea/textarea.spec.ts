import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import RTextArea from './RTextArea.vue'

describe('RTextArea', () => {
  it('renders properly with default props', () => {
    const wrapper = mount(RTextArea)
    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('label').exists()).toBe(false)
  })

  it('renders label when provided', () => {
    const wrapper = mount(RTextArea, {
      props: {
        label: 'Test Label',
      },
    })
    expect(wrapper.find('label').text()).toBe('Test Label')
  })

  it('emits update:modelValue event on input', async () => {
    const wrapper = mount(RTextArea)
    const textarea = wrapper.find('textarea')
    await textarea.setValue('test value')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test value'])
  })

  it('shows error message when provided', () => {
    const wrapper = mount(RTextArea, {
      props: {
        errorMsg: 'Error message',
      },
    })
    expect(wrapper.find('.r-textarea__error').text()).toBe('Error message')
  })

  it('shows hint when provided and no error', () => {
    const wrapper = mount(RTextArea, {
      props: {
        hint: 'Hint message',
      },
    })
    expect(wrapper.find('.r-textarea__hint').text()).toBe('Hint message')
  })

  it('prioritizes error over hint', () => {
    const wrapper = mount(RTextArea, {
      props: {
        errorMsg: 'Error message',
        hint: 'Hint message',
      },
    })
    expect(wrapper.find('.r-textarea__error').exists()).toBe(true)
    expect(wrapper.find('.r-textarea__hint').exists()).toBe(false)
  })

  it('applies disabled state correctly', () => {
    const wrapper = mount(RTextArea, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.find('textarea').attributes('disabled')).toBeDefined()
    expect(wrapper.find('textarea').classes()).toContain('r-textarea--disabled')
  })

  it('applies readonly state correctly', () => {
    const wrapper = mount(RTextArea, {
      props: {
        readonly: true,
      },
    })
    expect(wrapper.find('textarea').attributes('readonly')).toBeDefined()
    expect(wrapper.find('textarea').classes()).toContain('r-textarea--readonly')
  })

  it('handles focus and blur events', async () => {
    const wrapper = mount(RTextArea)
    const textarea = wrapper.find('textarea')

    await textarea.trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    expect(wrapper.find('textarea').classes()).toContain('r-textarea--focused')

    await textarea.trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
    expect(wrapper.find('textarea').classes()).not.toContain('r-textarea--focused')
  })

  it('applies auto-resize when enabled', async () => {
    const wrapper = mount(RTextArea, {
      props: {
        autoResize: true,
      },
    })
    const textarea = wrapper.find('textarea')
    expect(textarea.classes()).toContain('r-textarea--auto-resize')

    // Mock scrollHeight
    Object.defineProperty(textarea.element, 'scrollHeight', { value: 100 })
    await textarea.setValue('test\nvalue\nwith\nmultiple\nlines')

    expect(textarea.element.style.height).toBe('100px')
  })

  it('sets correct ARIA attributes', () => {
    const wrapper = mount(RTextArea, {
      props: {
        id: 'test-textarea',
        label: 'Test Label',
        required: true,
        errorMsg: 'Error message',
        ariaLabel: 'Custom aria label',
      },
    })
    const textarea = wrapper.find('textarea')

    expect(textarea.attributes('aria-label')).toBe('Custom aria label')
    expect(textarea.attributes('aria-required')).toBe('true')
    expect(textarea.attributes('aria-invalid')).toBe('true')
    expect(textarea.attributes('aria-describedby')).toBe('test-textarea-error')
  })
})
