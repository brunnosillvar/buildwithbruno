import js from '@eslint/js';
import parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import next from 'eslint-config-next';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // 🔧 Suas preferências de código
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Next.js config (core-web-vitals etc)
  ...next,

  {
    name: 'prettier-rules',
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': ['error'],
    },
  },
];
