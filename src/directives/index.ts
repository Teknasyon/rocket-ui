import { type App, type DirectiveBinding, createApp, h, ref } from 'vue'
import Tooltip from '../components/Tooltip/RTooltip.vue'

export const vTooltip = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const app: App = createApp({
      setup() {
        const props = ref(binding.value)

        return () =>
          h(Tooltip, {
            ...props.value,
          })
      },
    })
    app.mount(el)
  },
}
