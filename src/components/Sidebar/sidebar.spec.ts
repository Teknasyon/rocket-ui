import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';

import Sidebar from './RSidebar.vue';

describe('Sidebar', () => {
  it('renders correctly', () => {
    const wrapper = mount(Sidebar, {
      slots: {
        default: '<span class="default">test default</span>',
        actions: '<span class="actions">test actions</span>',
      },
    });
    expect(wrapper.find('.default').text()).toBe('test default');
    expect(wrapper.find('.actions').text()).toBe('test actions');
  });

  it('renders correctly when open', () => {
    const wrapper = mount(Sidebar, {
      props: {
        modelValue: true,
      },
      slots: {
        default: '<span class="default">test default</span>',
        actions: '<span class="actions">test actions</span>',
      },
    });
    expect(wrapper.find('.default').text()).toBe('test default');
    expect(wrapper.find('.actions').text()).toBe('test actions');
    expect(wrapper.find('.sidebar').classes()).toContain('sidebar--open');
  });
});
