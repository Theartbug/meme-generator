/* eslint-env node */
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = `${__dirname}/build`;

module.exports = {
    entry: './src/main.js',
    output: {
        path,
        filename: 'bundle.[hash].js',
    },
    devServer: {
        contentBase: './build',
    },
    plugins: [
        new CleanWebpackPlugin(`${path}/bundle.*.js`) 
    ],
};