const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic',
                                },
                            ],
                            '@babel/preset-env',
                        ],
                    },
                },
            },
        ],
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        },
    },
};
