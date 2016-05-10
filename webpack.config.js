// Vendor Imports
import path from 'path';
import webpack from 'webpack';

let webpackConfig = {
  profile: true,
  entry: {
    app: path.join(__dirname, 'app', 'app.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    preLoaders: [],
    loaders: [
      { test: /\.jsx?$/, loader: 'ng-annotate-loader!babel-loader' },
      { test: /\.pug$/, loader: 'pug-html-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
    postLoaders: []
  },
  resolve: {
    modulesDirectories: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js']
  }
};

export default webpackConfig;
