const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',

    output: {
        filename: '[fullhash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
    },
});
