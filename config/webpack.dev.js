const path = require('path')

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
            }
        ]
    }
}