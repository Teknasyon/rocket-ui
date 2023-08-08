import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Modal from './RModal.vue';
import exp from 'constants';

describe('Modal', () => {
  it('should render correctly', () => {
    const wrapper = mount(Modal, {
      props: {
        title: 'Test',
        modelValue: true,
      },
    });
    expect(wrapper.find('.modal').exists()).toBe(true);
    expect(
      wrapper.find('.modal').element.getElementsByClassName('title')[0]
        .innerHTML
    ).toBe('Test');
    expect(wrapper.find('.dialog').exists()).toBe(true);
    expect(wrapper.find('.dialog').attributes('aria-modal')).toBe('true');
    expect(wrapper.find('.dialog').attributes('role')).toBe('dialog');
    expect(wrapper.find('.dialog').attributes('open')).toBe('true');
  });
});
