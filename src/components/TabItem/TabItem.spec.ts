import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';

import TabItem from './TabItem.vue';

describe('TabItem', () => {
  it('renders properly', () => {
    const wrapper = mount(TabItem, {
      props: {
        id: 'tab-1',
        tab: { label: 'Tab 1', icon: 'face' },
        active: true,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').classes().includes('active'));
    expect(wrapper.find('button').html().includes('Tab 1'));
  });
});
