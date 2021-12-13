const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  plugins: [new webpack.DefinePlugin({})],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /\.stories.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
  optimization: {},
};
