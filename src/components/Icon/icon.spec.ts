import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Icon from './Icon.vue';

describe('Icon', () => {
  it('renders properly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'AdjustmentsIcon',
        size: '24',
        color: 'rgb(255, 255, 255)',
        kind: 'solid',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('svg').exists()).toBe(true);
    expect(wrapper.find('svg').element.getAttribute('aria-hidden')).toBe(
      'true'
    );
    expect(wrapper.find('svg').element.getAttribute('style')).toBe(
      'color: rgb(255, 255, 255);'
    );
    expect(wrapper.find('svg').element.getAttribute('fill')).toBe(
      'currentColor'
    );
  });
});
