const { merge } = require('webpack-merge');
const common = require('./common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',

    // entry: ['@babel/polyfill', './src/demo/index.tsx'],
    entry: ['@babel/polyfill', './src/demo/codesandbox/index.js'],

    devServer: {
        port: 3000,
        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
        }),
    ],

    devtool: 'eval-cheap-module-source-map',
});
