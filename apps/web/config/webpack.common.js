// @ts-check

import { join } from 'node:path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { PATHS } from './paths.js'

/** @type {import('webpack').Configuration} */
export default {
  entry: [join(PATHS.src, '/index.tsx')],
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: PATHS.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Guildhall',
      favicon: join(PATHS.public, '/images/favicon.png'),
      template: join(PATHS.src, '/template.html'),
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015'
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
    ],
  },

  resolve: {
    modules: [PATHS.src, 'node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '~': PATHS.src,
      assets: PATHS.public,
    },
  },
}
