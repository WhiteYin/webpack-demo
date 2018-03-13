const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'bundle': '../main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            loader: 'sass-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}