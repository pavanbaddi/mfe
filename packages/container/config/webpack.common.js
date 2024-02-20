const HtmlWebpackPulgin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPulgin({
            template: "./public/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}