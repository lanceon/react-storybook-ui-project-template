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
        loaders: ['style', 'css?modules', 'sass'],
        include: [
          path.resolve(__dirname, '../components'),
          path.resolve(__dirname, '../node_modules/react-toolbox')
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [
          path.resolve(__dirname, '../components'),
          path.resolve(__dirname, '../node_modules/react-toolbox')
        ],
      },
    ]
  },
  plugins: [
    new StyleLintPlugin({
      files: path.resolve(__dirname, '../**/*.s?(a|c)ss'),
    }),
  ],
}
