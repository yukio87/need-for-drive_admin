import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration } from 'webpack'

import { BuildOptions } from './types/types'
// import CopyPlugin from 'copy-webpack-plugin'
// import path from 'path'

export default function buildPluguns({
  mode,
  paths,
}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      // favicon: path.resolve(paths.public, 'favicon.svg'),
    }),
  ]

  if (isDev) {
    plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    )
    // plugins.push(
    //   new CopyPlugin({
    //     patterns: [
    //       {
    //         from: path.resolve(paths.public, 'locales'),
    //         to: path.resolve(paths.output, 'locales'),
    //       },
    //     ],
    //   }),
    // )
  }

  return plugins
}
