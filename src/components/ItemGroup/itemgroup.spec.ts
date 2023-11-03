import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'

import { h } from 'vue'

import RItemGroup from './RItemGroup.vue'
import RItem from './RItem.vue'

function defaultSlot() {
  return [
    h(
      RItem,
      { value: 'foo' },
      {
        default: ({ toggle }: any) =>
          h('div', { id: 'item', onClick: toggle }, ['foo']),
      },
    ),
    h(
      RItem,
      { value: 'bar' },
      {
        default: ({ toggle }: any) =>
          h('div', { id: 'item', onClick: toggle }, ['bar']),
      },
    ),
  ]
}

describe('RItemGroup', () => {
  it('should render correctly', async () => {
    const wrapper = mount(RItemGroup, {
      slots: {
        default: defaultSlot,
      },
    })

    const items = wrapper.findAll('#item')

    await items[0].trigger('click')
    await items[1].trigger('click')

    const events = wrapper.emitted('update:modelValue')

    expect(events).toHaveLength(2)
    expect(events).toEqual([[['foo']], [['bar']]])
  })

  it('should not deselect value when using mandatory prop', async () => {
    const wrapper = mount(RItemGroup, {
      props: {
        mandatory: true,
        modelValue: 'foo',
      },
      slots: {
        default: defaultSlot,
      },
    })

    const items = wrapper.findAll('#item')

    await items[0].trigger('click')

    const events = wrapper.emitted('update:modelValue')

    expect(events).toHaveLength(1)
  })
})
