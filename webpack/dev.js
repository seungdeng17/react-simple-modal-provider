const { merge } = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'development',

    devServer: {
        port: 3000,
        publicPath: '/',
    },

    devtool: 'eval-cheap-module-source-map',
});
