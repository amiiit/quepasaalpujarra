import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'

export default {
  entry: {
    app: './src/application/index.jsx',
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
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin({}),
  ],
  devServer: {
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },
  devtool: 'eval-source-map',
}
