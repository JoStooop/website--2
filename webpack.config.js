const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


module.exports = {
    mode: "development",
    entry: {
        main: "./src/js/index.js"
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),

        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            // Loading style
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },

            // Loading img
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        options: {
                            name: "[name].[ext]",
                            outputPath: "img/"
                        },
                        loader: 'file-loader',
                    },
                ],
            },

            // Loading fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        },
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },

}