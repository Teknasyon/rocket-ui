import kebabCase from "lodash.kebabcase"
import { addons, makeDecorator } from '@storybook/addons'

export const prettier = await import('prettier/standalone')
export const prettierHtml = await import('prettier/parser-html')
import { h, onMounted } from 'vue'
import dedent from 'ts-dedent'

export function templateSourceCode(
  templateSource,
  args,
  argTypes,
  replacing = 'v-bind="args"',
) {
  const componentArgs = {}
  for (const [k, t] of Object.entries(argTypes)) {
    const val = args[k]
    if (typeof val !== 'undefined' && t.table && t.table.category === 'props') {
      componentArgs[k] = val
    }
  }

  const propToSource = (key, val) => {
    const type = typeof val
    switch (type) {
      case "boolean":
        return val ? key : ""
      case "string":
        return `${key}="${val}"`
      default:
        return `:${key}="${val}"`
    }
  }

  return templateSource.replace(
    replacing,
    Object.keys(componentArgs)
    .map((key) => " " + propToSource(kebabCase(key), args[key]))
    .join(""),
  )
}

export const transformSource = (src, ctx) => {
  const args = {
    ...ctx.initialArgs,
    ...ctx.args,
  }
  const match = /\b("')?template\1:\s*`([^`]+)`/.exec(src);
  if (match) {
    const code = templateSourceCode(match[2], args, ctx.argTypes);
    return dedent(prettier.format(code, {
      parser: "vue",
      plugins: [prettierHtml],
      htmlWhitespaceSensitivity: "ignore",
    }));
  }
  return src;
}

export const withSource = makeDecorator({
  name: 'withSource',
  wrapper: (storyFn, ctx) => {
    const story = storyFn(ctx)
    return {
      setup () {
        onMounted(() => {
          try {
            const src = ctx.originalStoryFn.parameters.storySource.source
            const transformedSource = transformSource(src, ctx);
            const channel = addons.getChannel()
            const storyId = ctx.id
            channel.emit('storybook/docs/snippet-rendered', storyId, transformedSource)
          } catch (e) {
            console.warn('Failed to render code', e)
          }
        })
        return () => h(story)
      }
    }
  }
})