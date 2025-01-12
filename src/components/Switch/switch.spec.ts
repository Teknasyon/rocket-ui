import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Switch from './RSwitch.vue'

describe('Switch', () => {
  it('renders properly with default props', () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').attributes('type')).toBe('checkbox')
    expect(wrapper.find('input').attributes('role')).toBe('switch')
  })

  it('renders with label and proper accessibility attributes', () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
        label: 'Test Switch',
        required: true,
        ariaLabel: 'Custom Label',
      },
    })

    const input = wrapper.find('input')
    const label = wrapper.find('label')

    expect(label.text()).toContain('Test Switch')
    expect(label.attributes('for')).toBe('switch-id')
    expect(input.attributes('aria-label')).toBe('Custom Label')
    expect(input.attributes('aria-required')).toBe('true')
    expect(wrapper.find('.sr-only').exists()).toBe(true)
    expect(wrapper.find('.sr-only').text()).toBe('Required -')
  })

  it('handles disabled state correctly', () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
        disabled: true,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBe('')
    expect(input.attributes('aria-disabled')).toBe('true')
  })

  it('shows error message with proper accessibility attributes', () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
        errorMsg: 'Error message',
      },
    })

    const input = wrapper.find('input')
    const error = wrapper.find('.r-switch-texts__error')

    expect(error.exists()).toBe(true)
    expect(error.text()).toBe('Error message')
    expect(error.attributes('role')).toBe('alert')
    expect(error.attributes('id')).toBe('switch-id-error')
    expect(input.attributes('aria-invalid')).toBe('true')
    expect(input.attributes('aria-describedby')).toBe('switch-id-error')
  })

  it('shows hint message with proper accessibility attributes', () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
        hint: 'Hint message',
      },
    })

    const input = wrapper.find('input')
    const hint = wrapper.find('.r-switch-texts__hint')

    expect(hint.exists()).toBe(true)
    expect(hint.text()).toBe('Hint message')
    expect(hint.attributes('id')).toBe('switch-id-hint')
    expect(input.attributes('aria-describedby')).toBe('switch-id-hint')
  })

  it('handles keyboard interactions', async () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
      },
    })

    const input = wrapper.find('input')

    // Space key
    await input.trigger('keydown', { key: ' ' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])

    // Enter key
    await input.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([false])
  })

  it('updates v-model value', async () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
        modelValue: false,
      },
    })

    const input = wrapper.find('input')

    await input.setValue(true)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])

    await wrapper.setProps({ modelValue: true })
    expect(input.element.checked).toBe(true)
    expect(input.attributes('aria-checked')).toBe('true')
  })

  it('supports custom on/off text with screen reader announcements', async () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
        onText: 'Enabled',
        offText: 'Disabled',
        modelValue: false,
      },
    })

    const srText = wrapper.find('.sr-only')
    expect(srText.exists()).toBe(true)
    expect(srText.text()).toBe('Disabled')

    // Update to checked state
    await wrapper.setProps({ modelValue: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.sr-only').text()).toBe('Enabled')
  })

  it('supports aria-controls and aria-expanded attributes', () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
        ariaControls: 'content-1',
        ariaExpanded: true,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('aria-controls')).toBe('content-1')
    expect(input.attributes('aria-expanded')).toBe('true')
  })

  it('supports aria-pressed state instead of aria-checked', async () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
        usePressedState: true,
        modelValue: true,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('aria-pressed')).toBe('true')
    expect(input.attributes('aria-checked')).toBeUndefined()

    // Update to unchecked state
    await wrapper.setProps({ modelValue: false })
    await wrapper.vm.$nextTick()
    expect(input.attributes('aria-pressed')).toBe('false')
  })

  it('maintains proper focus management', async () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
      },
      attachTo: document.body,
    })

    const input = wrapper.find('input')

    // Focus the input
    await input.element.focus()
    expect(document.activeElement).toBe(input.element)

    // Create a button to tab to
    const nextButton = document.createElement('button')
    nextButton.id = 'next-button'
    document.body.appendChild(nextButton)

    // Tab should move focus to the next button
    await input.trigger('keydown', { key: 'Tab' })
    nextButton.focus()
    expect(document.activeElement).toBe(nextButton)

    // Cleanup
    nextButton.remove()
    wrapper.unmount()
  })
})
