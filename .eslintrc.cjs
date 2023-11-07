/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['@antfu', 'plugin:tailwindcss/recommended'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'jsonc/no-useless-escape': 'off',
    'vue/no-irregular-whitespace': 'off',
    'no-irregular-whitespace': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-explicit-emits': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    'vue/no-unused-vars': ['error', {
      ignorePattern: '^_',
    }],
    'vue/attributes-order': ['error', {
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
    }],
    'vue/custom-event-name-casing': ['error', {
      ignores: ['foo-bar', '/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'],
    }],
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
    }],
    'jsdoc/valid-types': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
