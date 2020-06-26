const path = require("path");   //native node module
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: "none", //gets rid of evals in development build
    output: {
        //This is an object with attributes "filename" and "path"
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});