import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Accordion from './Accordion.vue';

describe('Accordion', () => {
  it('should render correctly', () => {
    const wrapper = mount(Accordion, {
      props: {
        accordions: [
          {
            title: 'Accordion Title',
            content: 'Accordion Description',
          },
        ],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.accordion__title').text()).toBe('Accordion Title');
    expect(wrapper.find('.accordion__content').text()).toBe(
      'Accordion Description'
    );
    expect(
      wrapper
        .find('.accordion__header')
        .trigger('click')
        .then(() => {
          expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        })
    );
  });

  it('should render correctly with multiple accordions', () => {
    const wrapper = mount(Accordion, {
      props: {
        accordions: [
          {
            title: 'Accordion Title 1',
            content: 'Accordion Description 1',
          },
          {
            title: 'Accordion Title 2',
            content: 'Accordion Description 2',
          },
        ],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll('.accordion__title').length).toBe(2);
    expect(wrapper.findAll('.accordion__content').length).toBe(2);
    expect(wrapper.findAll('.accordion__title')[0].text()).toBe(
      'Accordion Title 1'
    );
    expect(wrapper.findAll('.accordion__content')[0].text()).toBe(
      'Accordion Description 1'
    );
    expect(wrapper.findAll('.accordion__title')[1].text()).toBe(
      'Accordion Title 2'
    );
    expect(wrapper.findAll('.accordion__content')[1].text()).toBe(
      'Accordion Description 2'
    );
  });

  it('should render correctly with multiple accordions and one expanded', () => {
    const wrapper = mount(Accordion, {
      props: {
        accordions: [
          {
            title: 'Accordion Title 1',
            content: 'Accordion Description 1',
            isExpanded: true,
          },
          {
            title: 'Accordion Title 2',
            content: 'Accordion Description 2',
          },
        ],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll('.accordion__title').length).toBe(2);
    expect(wrapper.findAll('.accordion__content').length).toBe(2);

    expect(wrapper.findAll('.accordion')[0].classes()).toContain(
      'accordion--expanded'
    );
    expect(wrapper.findAll('.accordion')[1].classes()).not.toContain(
      'accordion--expanded'
    );
  });

  it('should render correctly with multiple accordions and one expanded and one disabled', () => {
    const wrapper = mount(Accordion, {
      props: {
        accordions: [
          {
            title: 'Accordion Title 1',
            content: 'Accordion Description 1',
            isExpanded: true,
          },
          {
            title: 'Accordion Title 2',
            content: 'Accordion Description 2',
            isDisabled: true,
          },
        ],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll('.accordion__title').length).toBe(2);
    expect(wrapper.findAll('.accordion__content').length).toBe(2);
    expect(wrapper.findAll('.accordion')[0].classes()).toContain(
      'accordion--expanded'
    );
    expect(wrapper.findAll('.accordion')[1].classes()).toContain(
      'accordion--disabled'
    );
  });
});
