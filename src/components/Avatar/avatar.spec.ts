import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from './RAvatar.vue'

describe('Avatar', () => {
  it('should render correctly for image version', () => {
    const wrapper = mount(Avatar, {
      props: {
        type: 'image',
        size: 'sm',
        src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        alt: 'avatar',
        online: true,
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.avatar').classes()).toContain('avatar--sm')
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    )
    expect(wrapper.find('img').attributes('alt')).toBe('avatar')
    expect(wrapper.find('.avatar__online').exists()).toBe(true)
  })

  it('should render correctly for image version', () => {
    const wrapper = mount(Avatar, {
      props: {
        type: 'text',
        text: 'Hello World',
        size: 'sm',
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.avatar').classes()).toContain('avatar--sm')
    expect(wrapper.find('.avatar__text').text()).toBe('HW')
  })
})
