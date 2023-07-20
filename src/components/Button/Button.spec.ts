import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Button from './RButton.vue';

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'primary',
        size: 'large',
        type: 'button',
        backgroundColor: '#fff',
      },
    });
    expect(wrapper.classes()).toContain('button');
    expect(wrapper.classes()).toContain('button--primary');
    expect(wrapper.attributes('type')).toBe('button');
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.button').attributes('type')).toBe('button');
  });
});
describe('when clicked', () => {
  it('emits an event', () => {
    const wrapper = mount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
