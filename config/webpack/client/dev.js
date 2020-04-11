const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: "development",
    entry: [
        "react-hot-loader/patch",
        "./src/main.js"
    ],

    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../../../build")
    },

    devServer: {
        contentBase: "build",
        hot: true,
        overlay: true,
        stats: {
            colors: true
        }
    },

    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor:{
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },

    devtool: "source-map",

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
                        loader: "style-loader"
                    },

                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),

        new BundleAnalyzer({
            generateStatsFile: true
        })
    ]
}