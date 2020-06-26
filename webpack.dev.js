const path = require("path");   //native node module
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    devtool: "none", //gets rid of evals in development build
    output: {
        //This is an object with attributes "filename" and "path"
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
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
});