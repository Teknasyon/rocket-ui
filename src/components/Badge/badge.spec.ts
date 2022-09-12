import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Badge from './Badge.vue';

describe('Badge', () => {
  it('renders properly', () => {
    const wrapper = mount(Badge, {
      props: {
        placement: 'right',
        size: 'small',
        content: '1',
      },
    });
    console.log();

    expect(wrapper.element.classList.contains('badge'));
    expect(wrapper.element.classList.contains('badge--right'));
    expect(wrapper.element.classList.contains('badge--small'));
    expect(wrapper.element.innerHTML.includes('1'));
  });
});
