const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const MinifyWebPackPlugin = require("babel-minify-webpack-plugin")
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: "production",
    entry: [
        "./src/main.js"
    ],

    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../build")
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },

            {
                test: /\.html/,
                use: [
                    {
                        loader: "html-loader",
                        options: {}
                    }
                ]
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },

                    {
                        loader: "css-loader"
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: "postcss-loader"
                    }
                ],
            },

            {
                test: /\.(jpg|jpeg|gif|png)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/images/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },

    plugins: [
        new optimizeCssAssetsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:"styles-[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),

        // new MinifyWebPackPlugin(),
        new UglifyJSWebpackPlugin()

    ]
}