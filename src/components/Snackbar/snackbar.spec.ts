import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Snackbar from './Snackbar.vue';

describe('Snackbar', () => {
  it('renders properly', () => {
    const wrapper = mount(Snackbar, {
      props: {
        text: 'Snackbar text',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.snackbar').exists()).toBe(true);
    expect(wrapper.find('.snackbar__text').exists()).toBe(true);
    expect(wrapper.find('.snackbar__text').text()).toBe('Snackbar text');
    expect(wrapper.find('.snackbar__action').exists()).toBe(false);
    expect(wrapper.find('.snackbar__close').exists()).toBe(false);
  });
  it('with action', () => {
    const wrapper = mount(Snackbar, {
      props: {
        text: 'Snackbar text',
        actionText: 'Action',
        showAction: true,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.snackbar').exists()).toBe(true);
    expect(wrapper.find('.snackbar__action').exists()).toBe(true);
    expect(wrapper.find('.snackbar__action').text()).toBe('Action');
  });
  it('with close', () => {
    const wrapper = mount(Snackbar, {
      props: {
        text: 'Snackbar text',
        showClose: true,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.snackbar').exists()).toBe(true);
    expect(wrapper.find('.snackbar__close').exists()).toBe(true);
  });
  it('with timeout', async () => {
    const wrapper = mount(Snackbar, {
      props: {
        text: 'Snackbar text',
        timeout: 100,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.snackbar').exists()).toBe(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    expect(wrapper.find('.snackbar--closed').exists()).toBe(true);
  });
});
