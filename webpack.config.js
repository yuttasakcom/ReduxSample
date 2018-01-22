const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}
