const path = require("path");   //native node module
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    output: {
        //This is an object with attributes "filename" and "path"
        filename: "mainapp.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    }
});