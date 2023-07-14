const Header1 = () => ({
  template: '<h1>Hello world</h1>',
});

export default {
  title: 'Typography',

  parameters: {
    viewMode: 'docs',
    tags: ['autodocs'],
  },
};

export const Header11 = {
  render: Header1.bind({}),
  name: 'Header 1',
};
