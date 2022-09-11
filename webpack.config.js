const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: `img-optimize-loader`,
            options: {
              compress: {
                mode: "high",
                webp: true,
                disableOnDevelopment: true,
                gifsicle: true,
                name: "[path][name].[ext]",
              },
            },
          },
        ],
      },
      {
        test: /\.mp[34]$/i,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      title: "Gallery",
    }),
  ],

  devServer: {
    port: 3000,
    watchFiles: ["./src/*"],
  },
};
