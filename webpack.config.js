module.exports = function (env) {
    return require(`./webpack/webpack.${env.WEBPACK_SERVE ? 'dev' : 'prod'}.js`);
};
