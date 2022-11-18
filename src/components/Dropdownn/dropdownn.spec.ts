import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Dropdown from './Dropdownn.vue';

describe('Dropdown', () => {
  it('renders properly', () => {
    const wrapper = mount(Dropdown, {
      props: {
        options: [{ label: 'Option 1', value: 'option-1' }],
        selected: ['option-1'],
        content: '',
        triggers: ['hover'],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.trigger('click'));
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
