const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Modsen Films",
      template: path.join(__dirname, "public", "index.html"),
    }),
    new Dotenv(),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src", "components"),
    },
  },
  devServer: {
    port: 3000,
    open: true,
  },
};
