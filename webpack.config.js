const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/scripts/index.js', './src/styles/style.scss'],
  devtool: "eval-source-map",
  output: {
    publicPath: '../',
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/bundle.js',
    assetModuleFilename: 'images/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader'
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `fonts/[name].[ext]`,
              publicPath: "../"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader",
        options: {
          name: "images/[folder]/[name].[ext]",
        },
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/styles.css'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/pages/Website Pages/landing-page') + '/landing-page.pug',
      filename: 'pages/landing-page.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/pages/UI Kit') + '/index.pug',
      filename: 'pages/UI-kit.html'
    }),

    new CopyPlugin({
      patterns: [
          {
            from: path.resolve(__dirname, 'src/images'),
            to:   path.resolve(__dirname, 'dist/images')
          }
        ]
    })
  ],
};