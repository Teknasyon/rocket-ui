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
        appendIcon: 'close',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('chip');
    expect(wrapper.classes()).toContain('chip__primary');
    expect(wrapper.classes()).toContain('chip--small');
    expect(wrapper.find('.chip__text').text()).toBe('Hello');
    expect(
      wrapper
        .find('.chip__text')
        .trigger('click')
        .then(() => {
          expect(wrapper.emitted('clickChip')).toBeTruthy();
        })
    );
    expect(wrapper.find('.chip__append-icon').exists()).toBe(true);
    expect(
      wrapper
        .find('.chip__append-icon')
        .trigger('click')
        .then(() => {
          expect(wrapper.emitted('clickIcon')).toBeTruthy();
        })
    );
  });
});
