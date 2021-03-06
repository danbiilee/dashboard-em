const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const banner = `/* Build Date :: ${new Date().toLocaleString()} */`;

const config = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    app: { import: "./src/index.js", dependOn: "react-vendors" },
    "react-vendors": ["react", "react-dom", "react-router-dom", "prop-types"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: (pathData) => {
      if (isDevelopment) {
        return "[name].js";
      }
      const { name } = pathData.chunk;
      return name !== "app" ? "vendors/[name].js" : "[name].[contenthash:8].js";
    },
    chunkFilename: (pathData) => {
      if (isDevelopment) {
        return "[name].js";
      }
      if (pathData.chunk.name === "sms" || pathData.chunk.name === "nms") {
        return "[name].[contenthash:8].js";
      } else {
        return "vendors/[name].js";
      }
    },
    assetModuleFilename: "assets/[contenthash:8][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/transform-runtime"],
          env: {
            development: {
              plugins: [require.resolve("react-refresh/babel")],
            },
          },
        },
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, "src/scss"),
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: isDevelopment ? "eval-cheap-module-source-map" : false,
  devServer: {
    port: 3000,
    compress: true,
    historyApiFallback: true,
    static: { directory: path.join(__dirname, "public") },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ESLintPlugin(),
    new webpack.DefinePlugin({
      IMAGE_PATH: JSON.stringify("./assets/images"),
      SMS: JSON.stringify("sms"),
      NMS: JSON.stringify("nms"),
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[contenthash:8].css",
      ignoreOrder: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./public/favicon.ico",
          to: "favicon.ico",
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            preamble: banner,
            comments: false,
          },
        },
        extractComments: false,
        exclude: /config\//,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      name: "vendors",
      minSize: 250000,
      maxSize: 512000,
    },
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}

if (!isDevelopment && config.plugins) {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: `report_${Date.now()}.html`,
      openAnalyzer: false,
    })
  );
}

module.exports = config;
