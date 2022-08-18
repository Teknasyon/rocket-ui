import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, { props: { label: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
