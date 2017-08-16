const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common')
// const path = require('path')
const webpack = require('webpack')

module.exports = Merge(CommonConfig, {
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        hotOnly: true,
        // host: '192.168.10.203',
        noInfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin({
            columns: false
        })
    ]
})