const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const parts = require('./webpack.parts');
const PATHS = require('./PATHS');

const extractCSS = new ExtractTextPlugin('preloader.[hash].css');
require('dotenv').config();

const production = merge(
  {
    plugins: [parts.extractLess, extractCSS],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: extractCSS.extract(['css-loader', 'postcss-loader']),
        },
      ],
    },
  },
  parts.buildSetup('production'),
  parts.setMode('production'),
  parts.sourceMaps('source-map'),
  parts.styleLoader({
    use: parts.extractLess.extract({
      use: [
        {
          loader: 'css-loader',
          options: { minimize: true },
        },
        {
          loader: 'less-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: PATHS.POSTCSS,
            },
          },
        },
      ],
      fallback: 'style-loader',
    }),
  }),
);

module.exports = production;
