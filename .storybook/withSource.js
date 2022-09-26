import kebabCase from "lodash.kebabcase"

export function templateSourceCode(
  templateSource,
  args,
  argTypes,
  replacing = 'v-bind="args"',
) {
  const componentArgs = {}
  for (const [k, t] of Object.entries(argTypes)) {
    const val = args[k]
    if (typeof val !== 'undefined' && t.table && t.table.category === 'props' && val !== t.defaultValue) {
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
