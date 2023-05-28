const { rules, resolve } = require('./webpack.base.config');

module.exports = {
  module: {
    rules: [
      ...rules,
      {
        test: /\.(svg|jpg|jpeg|png|ico|gif|woff2|webp)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /(?<!\.module)\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /(?<=\.module)\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  resolve,
};
