Step 1 - Creating package.json [CMD]
    npm init -y

Step 2 - Install webpack [CMD]
    npm install --save-dev webpack webpack-cli

Step 3 - In "package.json"...
    ```
    ...
    "scripts": {
        "start": "webpack",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
    ...
    ```

Obs.: by default it will read an entry file "index.js" to create another file called "main.js" in a dist folder.

Step 4 - Configuring webpack (webpack.config.js)

Step 5 - Installing loaders

Step 6 - Watch out for cache busting and install plugins!

Step 7 - create 2 new webpack config files for dev and production builds respectively. The plugin webpack-merge will avoid code repetition. Install webpack-dev-server for development build

Step 8 - Adding multiple entry points

Step 9 - Extract CSS and Minify HTML/CSS/JS
    npm install --save-dev mini-css-extract-plugin