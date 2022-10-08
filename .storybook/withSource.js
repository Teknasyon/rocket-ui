import kebabCase from 'lodash.kebabcase';
import { addons, makeDecorator } from '@storybook/addons';
import * as prettier from 'prettier/standalone';
import * as prettierHtml from 'prettier/parser-html';

import { h, onMounted } from 'vue';
import dedent from 'ts-dedent';

export function templateSourceCode(
  templateSource,
  args,
  argTypes,
  replacing = 'v-bind="args"'
) {
  const componentArgs = {};
  for (const [k, t] of Object.entries(argTypes)) {
    const val = args[k];
    if (typeof val !== 'undefined' && t.table && t.table.category === 'props') {
      componentArgs[k] = val;
    }
  }

  const propToSource = (key, val) => {
    const type = typeof val;
    switch (type) {
      case 'boolean':
        return val ? key : '';
      case 'string':
        if (val === '') return '';
        return `${key}="${val}"`;
      default:
        return `:${key}='${JSON.stringify(val, null, 2)}'`;
    }
  };

  return templateSource.replace(
    replacing,
    Object.keys(componentArgs)
      .map((key) => ' ' + propToSource(kebabCase(key), args[key]))
      .join('')
  );
}

export const transformSource = (src, ctx, prettify = true) => {
  const args = {
    ...ctx.initialArgs,
    ...ctx.args,
  };
  const match = /\b("')?template\1:\s*`([^`]+)`/.exec(src);
  if (match) {
    const code = templateSourceCode(match[2], args, ctx.argTypes);
    if (!prettify) {
      return code;
    }
    return dedent(
      prettier.format(code, {
        parser: 'vue',
        plugins: [prettierHtml],
        htmlWhitespaceSensitivity: 'ignore',
      })
    );
  }
  return src;
};

export const withSource = makeDecorator({
  name: 'withSource',
  wrapper: (storyFn, ctx) => {
    const story = storyFn(ctx);
    return {
      setup() {
        onMounted(() => {
          try {
            const src = ctx.originalStoryFn.parameters.storySource.source;
            const transformedSource = transformSource(src, ctx);
            const channel = addons.getChannel();
            const storyId = ctx.id;
            channel.emit(
              'storybook/docs/snippet-rendered',
              storyId,
              transformedSource
            );
          } catch (e) {
            console.warn('Failed to render code', e);
          }
        });
        return () => h(story);
      },
    };
  },
});
