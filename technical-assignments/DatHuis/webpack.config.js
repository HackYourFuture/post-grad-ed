const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  mode: "development",
  target: "web",
  devtool: "eval-source-map",
  entry: {
    app: "./src/entry.js"
  },
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8080,
    index: "index.html",
    historyApiFallback: {
      index: "/index.html"
    }
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "DatHuis application",
      inject: false,
      hash: true,
      template: require("html-webpack-template"),
      appMountId: "app",
      lang: "nl"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf|jpg|jpeg|png|gif)$/,
        use: "file-loader"
      }
    ]
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../.dist"),
    publicPath: "/"
  }
};
