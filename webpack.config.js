const path = require("path");   //native node module

module.exports = {
    mode: "development",
    //devtool: "none", //gets rid of evals in development build
    entry: "./src/index.js",
    output: {
        //This is an object with attributes "filename" and "path"
        filename: "mainapp.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};