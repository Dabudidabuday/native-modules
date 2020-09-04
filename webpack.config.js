const path = require('path');
const sources = require('./webpack/sources/desktop.js');

const NunjucksWebpackPlugin = require("./webpack/plugins/NunjucksWebpackPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: sources,
    output: {
        path: path.resolve(__dirname + '/public/builds/desktop'),
        filename: '[name]/main.js'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader?sourceMap",
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            publicPath: "../fonts",
                            outputPath: "fonts/",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/main.css",
        }),
        new CleanWebpackPlugin(),
        new NunjucksWebpackPlugin({
            templates: [
                {
                    writeToFileEmit: true,
                    from: `./templates/pages/HomePage/index.njk`,
                    to: `HomePage/index.html`,
                    // context
                },
                {
                    writeToFileEmit: true,
                    from: `./templates/pages/CoursePage/index.njk`,
                    to: `CoursePage/index.html`,
                    // context
                },
                {
                    writeToFileEmit: true,
                    from: `./templates/pages/DeveloperPage/index.njk`,
                    to: `DeveloperPage/index.html`,
                    // context
                },
            ],
        }),
    ]
};
