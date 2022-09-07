import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';

import Chip from './Chip.vue';

describe('Chip', () => {
  it('renders properly', () => {
    const wrapper = mount(Chip, {
      props: {
        variant: 'primary',
        label: 'Hello',
        size: 'small',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('chip');
    expect(wrapper.classes()).toContain('chip--primary');
    expect(wrapper.classes()).toContain('chip--small');
    expect(wrapper.text()).toBe('Hello');
  });
});
