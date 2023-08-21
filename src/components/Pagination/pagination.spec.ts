import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Pagination from './RPagination.vue';

describe('Pagination', () => {
  it('should render correctly', () => {
    const wrapper = mount(Pagination, {
      props: {
        page: 1,
        totalPages: 10,
      },
    });

    expect(wrapper.find('.r-pagination').exists()).toBe(true);
  });
});
