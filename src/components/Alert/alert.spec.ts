import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Alert from './Alert.vue';

describe('Alert', () => {
  it('should render correctly', () => {
    const wrapper = mount(Alert, {
      props: {
        type: 'success',
        title: 'Alert Title',
        description: 'Alert Description',
        size: 'small',
        closable: true,
        closeText: 'Close2',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('.texts__title').text()).toBe('Alert Title');
    expect(wrapper.find('.texts__description').text()).toBe(
      'Alert Description'
    );
    expect(wrapper.find('.close').text()).toBe('Close2');
    expect(wrapper.find('.alert').classes()).toContain('alert--small');
  });
});