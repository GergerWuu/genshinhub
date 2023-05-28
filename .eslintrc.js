const alias = require('./alias');

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['@gergerwuu/eslint-config'],
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.jsx'],
            alias,
          },
        },
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        [
          require.resolve('@babel/plugin-proposal-decorators'),
          { legacy: true },
        ],
      ],
      presets: [require.resolve('@babel/preset-react')],
    },
  },
};
