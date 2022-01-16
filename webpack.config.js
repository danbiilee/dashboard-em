const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
// const apiMocker = require("connect-api-mocker");
// const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isDevelopment = process.env.NODE_ENV !== "production";

const config = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: isDevelopment ? "[name].js" : "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
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
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
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
  devtool: isDevelopment ? "inline-source-map" : false,
  devServer: {
    port: 3000,
    compress: true,
    historyApiFallback: true,
    static: { directory: path.join(__dirname, "public") },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new SourceMapDevToolPlugin(),
    new webpack.BannerPlugin({ banner: new Date().toLocaleDateString() }),
    new ESLintPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "./config",
    //       to: "./config",
    //     },
    //   ],
    // }),
    new webpack.DefinePlugin({
      IMAGE_PATH: JSON.stringify("./assets/images"),
      SMS: JSON.stringify("sms"),
      NMS: JSON.stringify("nms"),
    }),
  ],
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
