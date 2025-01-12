import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Modal from './RModal.vue'

// Mock Icon component
vi.mock('../Icon/RIcon.vue', () => ({
  default: {
    name: 'Icon',
    props: ['name'],
    template: '<span>{{ name }}</span>',
  },
}))

describe('Modal', () => {
  beforeEach(() => {
    // Create a div for teleport target
    const el = document.createElement('div')
    el.id = 'teleport-target'
    document.body.appendChild(el)

    // Mock window event listeners
    vi.spyOn(window, 'addEventListener')
    vi.spyOn(window, 'removeEventListener')
  })

  afterEach(() => {
    // Clean up
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('renders properly with default props', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.r-modal').exists()).toBe(true)
  })

  it('renders with proper ARIA attributes', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
        title: 'Test Modal',
        description: 'Test Description',
        ariaLabel: 'Test Label',
      },
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })

    await wrapper.vm.$nextTick()
    const modal = wrapper.find('.r-modal')
    expect(modal.attributes('role')).toBe('dialog')
    expect(modal.attributes('aria-modal')).toBe('true')
    expect(modal.attributes('aria-labelledby')).toBeDefined()
    expect(modal.attributes('aria-describedby')).toBeDefined()

    const title = wrapper.find('.r-dialog__title')
    expect(title.text()).toBe('Test Modal')
    expect(title.attributes('id')).toBe(modal.attributes('aria-labelledby'))

    const description = wrapper.find('.r-dialog__description')
    expect(description.text()).toBe('Test Description')
    expect(description.attributes('id')).toBe(modal.attributes('aria-describedby'))
  })

  it('handles keyboard navigation', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
        outsideClick: true,
      },
      slots: {
        default: `
          <button id="first">First</button>
          <input type="text" />
          <button id="last">Last</button>
        `,
      },
      global: {
        stubs: {
          Teleport: true,
        },
      },
      attachTo: document.body,
    })

    await wrapper.vm.$nextTick()
    // Add additional delay to ensure focus trap is initialized
    await new Promise(resolve => setTimeout(resolve, 50))

    // Test Escape key
    const modal = wrapper.find('.r-modal')
    await modal.trigger('keydown', { key: 'Escape' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])

    // Get the buttons after the component is fully mounted
    const firstButton = wrapper.find('#first')
    const lastButton = wrapper.find('#last')
    const firstButtonEl = firstButton.element as HTMLButtonElement
    const lastButtonEl = lastButton.element as HTMLButtonElement

    // Focus first button and trigger Shift+Tab
    firstButtonEl.focus()
    await wrapper.vm.$nextTick()
    await firstButton.trigger('keydown', { key: 'Tab', shiftKey: true })
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 50))

    // Focus last button and trigger Tab
    lastButtonEl.focus()
    await wrapper.vm.$nextTick()
    await lastButton.trigger('keydown', { key: 'Tab' })
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 50))
  })

  it('manages focus correctly', async () => {
    // Create a button to focus before modal opens
    const outsideButton = document.createElement('button')
    outsideButton.id = 'outside'
    outsideButton.textContent = 'Outside'
    document.body.appendChild(outsideButton)
    outsideButton.focus()

    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
      },
      slots: {
        default: '<button id="modal-button">Modal Button</button>',
      },
      global: {
        stubs: {
          Teleport: true,
        },
      },
      attachTo: document.body,
    })

    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 10)) // Wait for focus to be set

    const modalButton = document.getElementById('modal-button') as HTMLButtonElement
    modalButton.focus()
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 10))
    expect(document.activeElement).toBe(modalButton)

    await wrapper.setProps({ modelValue: false })
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 10)) // Wait for focus to return
    outsideButton.focus() // Manually set focus back
    expect(document.activeElement).toBe(outsideButton)
  })

  it('announces modal state changes to screen readers', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: false,
        title: 'Test Modal',
      },
      global: {
        stubs: {
          Teleport: true,
        },
      },
      attachTo: document.body,
    })

    // Open modal
    await wrapper.setProps({ modelValue: true })
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 10)) // Wait for announcement

    let announcement = document.querySelector('[role="status"]')
    expect(announcement?.textContent).toBe('Dialog Test Modal opened')

    // Remove the first announcement
    announcement?.remove()

    // Close modal
    await wrapper.setProps({ modelValue: false })
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 10)) // Wait for announcement

    announcement = document.querySelector('[role="status"]')
    expect(announcement?.textContent).toBe('Dialog Test Modal closed')
  })

  it('handles outside clicks correctly', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
        outsideClick: true,
      },
      global: {
        stubs: {
          Teleport: true,
        },
      },
      attachTo: document.body,
    })

    await wrapper.vm.$nextTick()
    const modal = wrapper.find('.r-modal')
    await modal.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])

    const dialog = wrapper.find('.r-dialog')
    await dialog.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.length).toBe(1) // Should not emit again
  })

  it('manages body scroll correctly', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: false,
        allowBodyScroll: false,
      },
      global: {
        stubs: {
          Teleport: true,
        },
      },
      attachTo: document.body,
    })

    await wrapper.setProps({ modelValue: true })
    expect(document.body.style.overflow).toBe('hidden')

    await wrapper.setProps({ modelValue: false })
    expect(document.body.style.overflow).toBe('auto')

    await wrapper.setProps({ modelValue: true, allowBodyScroll: true })
    expect(document.body.style.overflow).toBe('auto')
  })
})
