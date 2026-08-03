import xoEslintConfig from 'xo/eslint-adapter';

const eslintConfig = [
  ...xoEslintConfig,
  {
    // Prettier requires `<Foo />`; xo-react defaults to forbidding that space.
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules: {
      'react/jsx-tag-spacing': 'off',
      '@stylistic/jsx-tag-spacing': 'off',
    },
  },
];

export default eslintConfig;
