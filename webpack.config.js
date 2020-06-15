const path = require("path");
const project = require("./package.json");
const stripIndent = require("common-tags").stripIndent;
const webpack = require("webpack");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const userScriptBanner = stripIndent`
    // ==UserScript==
    // @name         DO iNTUItive
    // @namespace    https://github.com/DO-Tools/iNTUItive
    // @version      ${project.version}
    // @description  ${project.description}
    // @author       ${project.author}
    // @match        https://www.dugout-online.com/competitions/*
    // ==/UserScript==`;

module.exports = {
    entry: "./src/lib/iNTUItive.user.ts",
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader", "eslint-loader"],
                exclude: /node_modules/
            }
        ]
    },
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new webpack.BannerPlugin({
            banner: userScriptBanner,
            raw: true
        })
    ],
    optimization: {
        minimize: false
    },
    output: {
        filename: "iNTUItive.user.js",
        path: path.join(__dirname, "dist", "lib")
    }
};
