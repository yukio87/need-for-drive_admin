import webpack from 'webpack'

import buildDevServer from './buildDevServer'
import buildLoaders from './buildLoaders'
import buildPluguns from './buildPlugins'
import buildResolvers from './buildResolvers'
import { BuildOptions } from './types/types'

export default function buildWebpack(
  options: BuildOptions,
): webpack.Configuration {
  const { mode, paths } = options
  const isDev = mode === 'development'

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      publicPath: '/',
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPluguns(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
