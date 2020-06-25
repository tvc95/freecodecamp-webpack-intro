const path = require("path");   //native node module

module.exports = {
    mode: "development",
    devtool: "none", //gets rid of evals in development build
    entry: "./src/index.js",
    output: {
        //This is an object with attributes "filename" and "path"
        filename: "mainapp.js",
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
    }
};