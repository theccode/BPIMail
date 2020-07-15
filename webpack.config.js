const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "public", "js", "main.jsx"),
    output:{
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve:{
        extensions: [".js",".jsx"]
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude:/node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["babel-preset-react"]
                }
            }
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "src", "views", "index.html")
            })
    ]
};