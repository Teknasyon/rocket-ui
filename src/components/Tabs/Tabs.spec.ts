import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';

import Tabs from './Tabs.vue';

describe('Tabs', () => {
  it('renders properly', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: [{ label: 'Tab 1', icon: 'face' }],
      },
      scrollable: true,
      pill: true,
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.tabs-wrapper').exists()).toBe(true);
    expect(
      wrapper
        .find('.tabs-wrapper')
        .find('.tab-item')
        .element.innerHTML.includes('Tab 1')
    );
    expect(
      wrapper
        .find('.tabs-wrapper')
        .find('.tab-item')
        .element.innerHTML.includes('face')
    );
  });
});
