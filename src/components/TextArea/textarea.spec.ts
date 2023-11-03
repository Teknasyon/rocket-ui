import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'

import TextArea from './RTextArea.vue'

describe('TextArea', () => {
  it('renders properly', () => {
    const wrapper = mount(TextArea, {
      props: {
        id: 'textarea-id',
        placeholder: 'textarea placeholder',
        modelValue: 'textarea value',
        label: 'textarea label',
        hint: 'textarea hint',
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('textarea').attributes('id')).toBe('textarea-id')
    expect(wrapper.find('textarea').attributes('placeholder')).toBe(
      'textarea placeholder',
    )
    expect(wrapper.find('textarea').element.value).toBe('textarea value')
    expect(wrapper.find('label').text()).toBe('textarea label')
    expect(wrapper.find('.textarea__hint').text()).toBe('textarea hint')
  })
  it('error situation', () => {
    const wrapper = mount(TextArea, {
      props: {
        id: 'textarea-id',
        errorMsg: 'textarea error',
      },
    })
    expect(wrapper.find('.textarea__error').text()).toBe('textarea error')
  })
})
