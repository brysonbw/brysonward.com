import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import { configs } from 'eslint-plugin-lit';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginSecurity from 'eslint-plugin-security';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  configs['flat/recommended'],
  jsdoc.configs['flat/recommended-error'],
  pluginSecurity.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        ...globals.browser,
      },
    },
    plugins: { jsdoc, importPlugin },
    rules: {
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: false },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      'sort-vars': [
        'error',
        {
          ignoreCase: false,
        },
      ],
      'security/detect-non-literal-fs-filename': 'off',
      // Prettier
      'prettier/prettier': 'error',
      // Lit
      'lit/no-legacy-template-syntax': 'error',
      'lit/no-template-arrow': 'warn',
      // JSDoc
      'jsdoc/require-description': 'off',
      'jsdoc/require-property-description': 'off',
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-returns-description': 'off',
    },
  },
  {
    files: ['test/**/*.js'],
    rules: {},
  },
];
