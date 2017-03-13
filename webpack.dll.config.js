const webpack = require('webpack');

module.exports = {
    entry: {
        vendors: [
            'webpack-dev-server/client',
            'babel-polyfill',
            'mobx',
            'mobx-react',
            // 'whatwg-fetch',
            'lodash',
            'react',
            'react-dom',
        ],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader!babel-loader'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
};
