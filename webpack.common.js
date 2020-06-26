const path = require("path");   //native node module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",     //3. Inject styles into DOM
                    "css-loader",       //2. turns css into commonjs
                    "sass-loader"       //1. Turns sass into css
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ]
};