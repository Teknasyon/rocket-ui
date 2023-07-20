import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Textfield from './RTextfield.vue';

describe('Textfield', () => {
  it('renders properly', () => {
    const wrapper = mount(Textfield, {
      props: {
        id: 'textfield-id',
        label: 'Textfield label',
        disabled: false,
        required: false,
        placeholder: 'Textfield placeholder',
        type: 'text',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('label').exists()).toBe(true);
    expect(wrapper.find('label').element.getAttribute('for')).toBe(
      'textfield-id'
    );
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('input').element.getAttribute('id')).toBe(
      'textfield-id'
    );
    expect(wrapper.find('input').element.getAttribute('type')).toBe('text');
    expect(wrapper.find('input').element.getAttribute('disabled')).toBe(null);
    expect(wrapper.find('input').element.getAttribute('required')).toBe(null);
    expect(wrapper.find('input').element.getAttribute('placeholder')).toBe(
      'Textfield placeholder'
    );
  });
});
