const path = require("path");
const webpack = require("webpack");

const isEnvProduction = process.env.PRODUCTION === "true";

module.exports = {
  stories: [
    "../src/react/**/*.stories.mdx",
    "../src/react/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.stories.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
