'use strict';

const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'index.js',
    libraryExport: 'default',
    library: 'DOCX4JS',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
      'dist': path.resolve(__dirname, './dist')
    },
    extensions: ['.js', '.scss', '.html']
  },
  // externals: {
  //   'docx4js': {
  //     commonjs: 'docx4js',
  //     commonjs2: 'docx4js',
  //     amd: 'docx4js',
  //     root: 'docx4js'
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },
  performance: { hints: false },
  devServer:{
    host:'localhost',
    contentBase: path.join(__dirname, './dist'),
    port: 8080,
    hot: false
  }
};
