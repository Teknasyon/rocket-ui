import dedent from "ts-dedent";
import { templateSourceCode } from "./withSource"
const prettier = await import("prettier/standalone");
const prettierHtml = await import("prettier/parser-html");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",
  layout: "centered",
  docs: {
    transformSource(src, ctx) {
      const match = /\b("')?template\1:\s*`([^`]+)`/.exec(src);
      if (match) {
        const code = templateSourceCode(match[2], ctx.initialArgs || {}, ctx.argTypes);
        return dedent(prettier.format(code, {
          parser: "vue",
          plugins: [prettierHtml],
          htmlWhitespaceSensitivity: "ignore",
        }));
      }
      return src;
    },
  }
}

export const decorators = [
  // withSource
]
