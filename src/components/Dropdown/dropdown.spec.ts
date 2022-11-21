import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Dropdown from './Dropdown.vue';

describe('Dropdown', () => {
  it('renders properly', () => {
    const wrapper = mount(Dropdown, {
      props: {
        options: [{ value: 1, label: '1' }],
        placeholder: 'Select...',
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('input').attributes('type')).toBe('text');
    expect(wrapper.find('input').attributes('placeholder')).toBe('Select...');
    expect(wrapper.classes()).toContain('dropdown');
    expect(wrapper.find('ul').exists()).toBe(true);
    expect(wrapper.find('.select').exists()).toBe(true);
    expect(
      wrapper
        .find('.select')
        .trigger('click')
        .then(() => {
          expect(wrapper.find('ul').classes()).toContain(
            'select-options--active'
          );
        })
    );
  });

  it('multiple', () => {
    const wrapper = mount(Dropdown, {
      props: {
        options: [
          { value: 1, label: '1' },
          { value: 2, label: '2' },
        ],
        multiple: true,
      },
    });
    expect(
      wrapper
        .find('.select')
        .trigger('click')
        .then(() => {
          expect(wrapper.find('ul').classes()).toContain(
            'select-options--active'
          );
        })
        .then(() => {
          document.addEventListener('click', () => {
            expect(wrapper.find('ul').classes()).not.toContain(
              'select-options--active'
            );
          });
        })
    );

    expect(wrapper.find('.select__multiple').exists()).toBe(true);
    expect(wrapper.find('.select-options__option__label').text()).toBe('1');
    expect(
      wrapper
        .find('.select-options__option')
        .trigger('click')
        .then(() => {
          expect(wrapper.find('.select__multiple').text()).toBe('1,');
        })
    );
  });
  it('taggable', () => {
    const wrapper = mount(Dropdown, {
      props: {
        options: [
          { value: 1, label: '1' },
          { value: 2, label: '2' },
        ],
        taggable: true,
      },
    });

    expect(wrapper.find('.select__tags').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(
      wrapper
        .find('.select-options__option')
        .trigger('click')
        .then(() => {
          wrapper
            .find('.select__tags')
            .element.children[0].classList.contains('chip');
          wrapper.find('.select__tags').element.children[0].textContent === '1';
        })
    );
  });
});
