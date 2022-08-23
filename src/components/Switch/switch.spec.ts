import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Switch from './Switch.vue';

describe('Switch', () => {
  it('renders properly', () => {
    const wrapper = mount(Switch, {
      props: {
        id: 'switch-id',
        disabled: false,
        size: 'small',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('label').exists()).toBe(true);
    expect(wrapper.find('label').element.getAttribute('for')).toBe('switch-id');
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('input').element.getAttribute('id')).toBe('switch-id');
    expect(wrapper.find('input').element.getAttribute('type')).toBe('checkbox');
    expect(wrapper.find('input').element.getAttribute('disabled')).toBe(null);
  });
});
