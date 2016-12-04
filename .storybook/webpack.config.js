const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: [
          path.resolve(__dirname, '../components'),
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [
          path.resolve(__dirname, '../components'),
        ]
      },
    ]
  }
}