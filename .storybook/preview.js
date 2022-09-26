import { templateSourceCode } from './withSource'
const prettier = await import("prettier/standalone");
const prettierHtml = await import("prettier/parser-html");

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
  options: {
    storySort: {
      order: ['Getting Started', 'Layout'],
    },
  },
  docs: {
    transformSource(src, ctx) {
      const match = /\b("')?template\1:\s*`([^`]+)`/.exec(src);
      if (match) {
        const code = templateSourceCode(match[2], ctx.initialArgs || {}, ctx.argTypes);
        return prettier.format(code, {
          parser: "vue",
          plugins: [prettierHtml],
          htmlWhitespaceSensitivity: "ignore",
        });
      }
      return src;
    },
  }
}

export const decorators = [
  // withSource
]
