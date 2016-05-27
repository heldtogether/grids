var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname + "/../app/assets/js",
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/main.css', {
            allChunks: true
        })
    ]
};
