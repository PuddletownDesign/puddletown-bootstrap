/**
 * Requires
 */
const path = require('path')
const webpack = require('webpack')

/**
 * Webpack config
 */
module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'src',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /highlight\.js\/lib\/languages$/,
      new RegExp(`^./(${['javascript', 'css', 'bash'].join('|')})$`)
    )
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
