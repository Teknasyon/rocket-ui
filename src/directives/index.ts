export const vFocus = {
  mounted: (el: HTMLInputElement, { value }: { value: object }) => {
    el.focus();
    console.log('mounted', el, value);
  },
};
