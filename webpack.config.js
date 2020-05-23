'use strict';

const path    = require('path'),
      webpack = require('webpack');

const PATHS = {
    src: path.join(__dirname, './src'),
    build: path.join(__dirname, './build')
};

module.exports = {
    entry: `${PATHS.src}/index.js`,
    output: {
        path: path.resolve(__dirname, PATHS.build),
        filename: `gross.js`,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js']
    }
};