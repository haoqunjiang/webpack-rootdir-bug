const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  }
};

module.exports = config;
