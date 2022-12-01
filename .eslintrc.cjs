// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier',
    'eslint:recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  settings: {
    alias: {
      map: [['@', './src']],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  // 这里根据自己的项目进行配置
  // 0 = off, 1 = warn, 2 = error
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false,
        'missing-semicolon-after-character-reference': false,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-param-reassign': ['error', { props: false }],
    'vue/multi-word-component-names': 'off',
    'no-new-object': 'off',
    'no-explicit-any': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/v-on-event-hyphenation': 'off',
    camelcase: 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-return-assign': 0,
    'import/extensions': 0,
    'vue/require-component-is': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'default-case': 0,
    '@typescript-eslint/ban-types': 0,
    'no-bitwise': 0,
    'no-case-declarations': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-empty-function': 0,
  },
}
