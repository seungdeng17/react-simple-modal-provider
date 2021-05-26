const { merge } = require('webpack-merge');
const common = require('./common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',

    output: {
        filename: '[fullhash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
    },
});
