// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier/recommended';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('next/core-web-vitals'), // All essentials
  prettier,
  {
    rules: {
      'prettier/prettier': ['warn', {}, { usePrettierrc: true }], // Only if using Prettier
    },
  },
];
