![Logo](./resources/rocket-ui-logo-light.svg#gh-light-mode-only)
![Logo](./resources/rocket-ui-logo-dark.svg#gh-dark-mode-only)

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

We welcome contributions of any kind including documentation, bug reports, bug fixes, feature requests, feature implementations, and pull requests. If you're interested in contributing to this project, please follow these guidelines:

- Fork this repository to your own GitHub account and then clone it to your local device.
- Install the dependencies by running `yarn install`.
- Run `yarn dev` to start the dev server and see your changes in real-time as you edit the source files.
- Create a new branch for your changes, e.g. `git checkout -b my-feature`.
- Make your changes and commit them with a descriptive message.
- Push your changes to your forked repository, e.g. `git push -u origin my-feature`.
- Create a pull request from your forked repository to this repository, and describe the changes you've made and why they should be merged.
- Before submitting a pull request, please make sure that your changes pass the following checks:

The unit tests pass by running `yarn test:unit`.
The code passes the ESLint check by running `yarn lint`.
The code builds without errors by running `yarn build`.

We aim to respond to all pull requests and issues within 48 hours. Thank you for your interest in contributing to Rocket UI Vue!

## License

MIT. See [LICENSE](./LICENSE) for more details.
