const { merge } = require('webpack-merge');
const common = require('./common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',

    entry: ['@babel/polyfill', './src/lib/index.ts'],

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: 'umd',
    },

    externals: {
        'react': 'commonjs react',
        'react-dom': 'commonjs react-dom',
    },
});
