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
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
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
    extensions: [".*", ".js", ".ts", ".tsx", ".jsx"],
    alias: {
      "@root": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@hooks": path.resolve(__dirname, "src", "hooks"),
      "@store": path.resolve(__dirname, "src", "store"),
      "@app-types": path.resolve(__dirname, "src", "types"),
    },
  },
  devServer: {
    port: 3000,
    open: true,
  },
};
