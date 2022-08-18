import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Hello Vitest',
        role: 'primary',
        size: 'large',
        type: 'button',
        backgroundColor: '#fff',
      },
    });
    expect(wrapper.text()).toContain('Hello Vitest');
    expect(wrapper.classes()).toContain('button');
    expect(wrapper.classes()).toContain('button--primary');
    expect(wrapper.attributes('type')).toBe('button');
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.button').attributes('type')).toBe('button');
    describe('when clicked', () => {
      it('emits an event', () => {
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toBeTruthy();
      }).timeout(0);
    });
    it('renders a button', () => {
      expect(wrapper.find('.button').exists()).toBe(true);
    });
  });
});
