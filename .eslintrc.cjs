/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    '@antfu',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/comma-dangle': 0,
    'jsdoc/valid-types': 0,
    'jsdoc/require-returns-check': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-side-effects-in-computed-properties': 2,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
      },
    ],
    'vue/custom-event-name-casing': 0,
  },
}
