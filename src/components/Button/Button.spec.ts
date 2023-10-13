import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import Button from './RButton.vue';

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'default',
        size: 'large',
        type: 'button',
      },
    });
    expect(wrapper.classes()).toContain('r-button');
    expect(wrapper.classes()).toContain('r-button__default--primary');
    expect(wrapper.attributes('type')).toBe('button');
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.r-button').attributes('type')).toBe('button');
  });
});
describe('when clicked', () => {
  it('emits an event', () => {
    const wrapper = mount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
