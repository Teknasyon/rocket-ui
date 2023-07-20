import { type App, createApp, h, ref, type DirectiveBinding } from 'vue';
import Tooltip from '../components/Tooltip/RTooltip.vue';

export const vTooltip = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    console.log('vTooltip');
    const app: App = createApp({
      setup() {
        const props = ref(binding.value);

        return () =>
          h(Tooltip, {
            ...props.value,
          });
      },
    });
    app.mount(el);
  },
};
