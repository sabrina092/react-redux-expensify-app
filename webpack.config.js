const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === 'production';
  // const CSSExtract = new MiniCssExtractPlugin('style.css')

  return {
    mode: 'development',
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, 'public'),
      filename: "package.js"
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: isProduction ? '[name].css' : '[name].[hash].css',
        chunkFilename: isProduction ? '[id].css' : '[id].[hash].css',
      }),
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
}
