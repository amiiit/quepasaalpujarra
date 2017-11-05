import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'

export default {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    })
  ],
  devServer: {
  },
  devtool: 'eval-source-map',
}
