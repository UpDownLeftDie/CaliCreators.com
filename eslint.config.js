import xoEslintConfig from 'xo/eslint-adapter';

const eslintConfig = [
  ...xoEslintConfig,
  {
    // Prettier requires `<Foo />`; xo-react defaults to forbidding that space.
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules: {
      'react/jsx-tag-spacing': 'off',
      '@stylistic/jsx-tag-spacing': 'off',
      // Bundler resolves source imports without extensions (CSS/assets still use them).
      'import-x/extensions': [
        'error',
        'always',
        {
          ignorePackages: true,
          pattern: {
            js: 'never',
            jsx: 'never',
            cjs: 'never',
            mjs: 'never',
            ts: 'never',
            tsx: 'never',
            cts: 'never',
            mts: 'never',
          },
        },
      ],
      // Off: Node's rule fights bundler/TS resolution (demands .js for .tsx modules).
      'n/file-extension-in-import': 'off',
    },
  },
];

export default eslintConfig;
