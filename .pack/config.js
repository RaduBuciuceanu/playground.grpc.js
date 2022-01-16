module.exports = {
  target: 'node16',
  mode: 'development',
  devtool: 'source-map',
  stats: 'errors-only',
  externals: [
    require('webpack-node-externals')()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /\(node_modules\)/,
        use: {
          loader: 'swc-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.mjs'
    ],
    alias: {
      src: require('path').resolve(__dirname, '..', 'src'),
    },
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  }
}

