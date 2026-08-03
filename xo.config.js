import {fixupConfigRules} from '@eslint/compat';
import xoReact from 'eslint-config-xo-react';
import sonarjs from 'eslint-plugin-sonarjs';

/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
  {
    space: true,
    prettier: true,
  },
  {
    ignores: ['dist/**', '.output/**', 'src/routeTree.gen.ts', 'next-env.d.ts'],
  },
  ...fixupConfigRules(xoReact({space: true})),
  sonarjs.configs.recommended,
  {
    // Align with n/file-extension-in-import: TypeScript source extensions omitted.
    rules: {
      'import-x/extensions': [
        'error',
        'always',
        {
          ignorePackages: true,
          pattern: {
            ts: 'never',
            tsx: 'never',
          },
        },
      ],
    },
  },
  {
    // Match Prettier (`<Foo />`); xo-react defaults to beforeSelfClosing: "never".
    // Keep disabled so Prettier alone owns this spacing (avoids autofix fights).
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules: {
      'react/jsx-tag-spacing': 'off',
      '@stylistic/jsx-tag-spacing': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    rules: {
      // React components must be PascalCase; external APIs use snake_case keys.
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'import',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'property',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'objectLiteralProperty',
          format: null,
        },
        {
          selector: 'typeProperty',
          format: null,
        },
        {
          selector: 'enumMember',
          format: ['PascalCase', 'UPPER_CASE'],
        },
      ],
    },
  },
];

export default xoConfig;
