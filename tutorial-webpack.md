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

Obs.: it will read an entry file "index.js" to create another file called "main.js" in a dist folder