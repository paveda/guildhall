// @ts-check

import { merge } from 'webpack-merge'
import common from './webpack.common.js'

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // @ts-ignore
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: false
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            },
          },
        ],
      },
    ],
  },
})
