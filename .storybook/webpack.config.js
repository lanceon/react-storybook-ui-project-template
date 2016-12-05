const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: path.resolve(__dirname, '../node_modules'),
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: path.resolve(__dirname, '../node_modules'),
      },
      {
        test: /.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
    ]
  },
  plugins: [
    new StyleLintPlugin({
      files: path.resolve(__dirname, '../**/*.s?(a|c)ss'),
    }),
  ],
}
