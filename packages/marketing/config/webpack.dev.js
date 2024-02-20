const { merge } = require("webpack-merge");
const HtmlWebpackPulgin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const common = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: [
        new HtmlWebpackPulgin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingApp": "./src/bootstrap"
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(common, devConfig);