const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: "development",
    entry:[
        "./src/main.js"
    ],

    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname,"../build")
    },

    devServer: {
        contentBase: "build",
        hot: true,
        overlay:true,
        stats:{
            color: true
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
              test: /\.html/,
              use:[
                  {
                      loader: "file-loader",
                      options: {
                          name: "[name].html"
                      }
                  },
                  {
                      loader: "extract-loader"
                  },
                  {
                      loader: "html-loader",
                      options: {
                      }
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
                        loader: "css-loader"
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            },

            {
                test: /\.(jpg|jpeg|gif|png)/,
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            name:"assets/images/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}