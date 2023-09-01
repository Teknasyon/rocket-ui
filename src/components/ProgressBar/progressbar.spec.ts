import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import RProgressbar from './RProgressbar.vue';

describe('progressbar', () => {
  it('should render correctly', () => {
    const wrapper = mount(RProgressbar, {
      props: {
        value: 50,
      },
    });

    expect(wrapper.find('.r-progressbar').exists()).toBe(true);
    expect(wrapper.attributes('value')).toBe('50');
  });
});
