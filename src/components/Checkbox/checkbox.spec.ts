import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Checkbox from './Checkbox.vue';

describe('Checkbox', () => {
  it('renders properly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        id: 'checkbox-id',
        label: 'Checkbox label',
        disabled: false,
        required: false,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('label').exists()).toBe(true);
    expect(wrapper.find('label').element.getAttribute('for')).toBe(
      'checkbox-id'
    );
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('input').element.getAttribute('id')).toBe(
      'checkbox-id'
    );
    expect(wrapper.find('input').element.getAttribute('type')).toBe('checkbox');
    expect(wrapper.find('input').element.getAttribute('disabled')).toBe(null);
    expect(wrapper.find('input').element.getAttribute('required')).toBe(null);
  });
});
