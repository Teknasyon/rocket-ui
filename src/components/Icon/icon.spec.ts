import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Icon from './Icon.vue';

describe('Icon', () => {
  it('renders properly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'face',
        size: '24',
        color: 'rgb(255, 255, 255)',
        kind: 'outlined',
        fontWeight: 'bold',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.find('span').classes().includes('material-icons-outlined'));
    expect(wrapper.find('span').text()).toBe('face');
    expect(wrapper.find('span').attributes('style')).toContain(
      'font-size: 24px; font-weight: bold; color: rgb(255, 255, 255);'
    );
  });
});
