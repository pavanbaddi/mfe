const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const common = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/auth/latest/"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: {
                "./AuthApp": "./src/bootstrap"
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(common, devConfig);