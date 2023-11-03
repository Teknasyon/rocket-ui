import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'

import Tooltip from './RTooltip.vue'
import { Trigger } from './popper'

describe('Tooltip', () => {
  it('click trigger', () => {
    const wrapper = mount(Tooltip, {
      props: {
        triggers: Trigger.Click,
        outsideClick: true,
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.trigger').exists()).toBe(true)
    expect(wrapper.find('.tooltip').exists()).toBe(true)
    expect(
      wrapper
        .find('.trigger')
        .trigger('click')
        .then(() => {
          expect(wrapper.find('.tooltip').attributes('style')).toBe(
            'display: block;',
          )
        })
        .then(() => {
          wrapper.find('.trigger').trigger('click')
          expect(wrapper.find('.tooltip').attributes('style')).toBe(
            'display: "";',
          )
        }),
    )
  })
  it('hover trigger', () => {
    const wrapper = mount(Tooltip, {
      props: {
        triggers: Trigger.Hover,
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.trigger').exists()).toBe(true)
    expect(wrapper.find('.tooltip').exists()).toBe(true)
    expect(
      wrapper
        .find('.trigger')
        .trigger('mouseenter')
        .then(() => {
          expect(wrapper.find('.tooltip').attributes('style')).toBe(
            'display: block;',
          )
        })
        .then(() => {
          wrapper.find('.trigger').trigger('mouseleave')
          expect(wrapper.find('.tooltip').attributes('style')).toBe(
            'display: "";',
          )
        }),
    )
  })
  it('manual trigger', () => {
    const wrapper = mount(Tooltip, {
      props: {
        triggers: Trigger.Manual,
        shown: true,
        autoHide: true,
        hideDelay: 1000,
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.trigger').exists()).toBe(true)
    expect(wrapper.find('.tooltip').exists()).toBe(true)
    expect(wrapper.find('.tooltip').attributes('style')).toBe(
      'display: block;',
    )
    setTimeout(() => {
      expect(wrapper.find('.tooltip').attributes('style')).toBe('""')
    }, 1000)
  })
})
