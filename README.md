# Rocket UI Vue

## Installation

```sh
yarn add @rocket-ui/vue
```

## Usage

Your `main.js` file should look like this:

```js
import { createApp } from 'vue'
import App from './App.vue'

// Import the Styles
import '@rocket-ui/vue/dist/style.css'

createApp(App).mount('#app')
```

Then you can use the components in your `App.vue` file:

```vue
<script setup>
import { Button } from '@rocket-ui/vue'
</script>

<template>
  <Button>Rocket UI Button</Button>
</template>
```

## Development

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
yarn install
```

#### Compile and Hot-Reload for Development

```sh
yarn dev
```

#### Type-Check, Compile and Minify for Production

```sh
yarn build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

## Contribution

Clone the repo and run `yarn install` to install dependencies. Then run `yarn dev` to start the dev server.

## License

MIT. See [LICENSE](./LICENSE) for more details.
