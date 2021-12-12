const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    entry: "./src/server.ts",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.join(__dirname, "dist-webpack"),
        filename: "server.js",
    },
    mode: "development",
    target: 'node',
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false, // if you don't put this is, __dirname
        __filename: false, // and __filename return blank or /
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                './node_modules/swagger-ui-dist/swagger-ui.css',
                './node_modules/swagger-ui-dist/swagger-ui-bundle.js',
                './node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js',
                './node_modules/swagger-ui-dist/favicon-16x16.png',
                './node_modules/swagger-ui-dist/favicon-32x32.png'
            ]
        })
    ]
}