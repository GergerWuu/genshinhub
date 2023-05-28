const { rules, resolve } = require('./webpack.base.config');

module.exports = {
  entry: './src/main/index.js',
  module: {
    rules: [
      ...rules,
      {
        test: /\.(svg|jpg|jpeg|png|ico|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
    ],
  },
  resolve,
};
