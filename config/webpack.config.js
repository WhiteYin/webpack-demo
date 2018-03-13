const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        'bundle': path.resolve(__dirname,"../main.js")
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            loader: ['style-loader','css-loader','sass-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}