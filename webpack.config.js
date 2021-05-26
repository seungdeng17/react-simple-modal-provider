module.exports = function (env) {
    return require(`./webpack/${env.WEBPACK_SERVE ? 'dev' : 'prod'}.js`);
};
