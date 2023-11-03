import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Alert from './RAlert.vue'

describe('Alert', () => {
  it('should render correctly', () => {
    const wrapper = mount(Alert, {
      props: {
        type: 'success',
        title: 'Alert Title',
        description: 'Alert Description',
        size: 'small',
        closable: true,
      },
    })

    expect(wrapper.classes()).toContain('alert')
    expect(wrapper.find('.texts__title').text()).toBe('Alert Title')
    expect(wrapper.find('.texts__description').text()).toBe(
      'Alert Description',
    )
    expect(wrapper.find('.alert').classes()).toContain('alert--small')
    expect(
      wrapper
        .find('.alert')
        .trigger('click')
        .then(() => {
          expect(wrapper.emitted('close')).toBeTruthy()
        }),
    )
  })
})
