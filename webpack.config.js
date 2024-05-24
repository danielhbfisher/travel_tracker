const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/build'), // Corrected path
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
              '@babel/preset-flow',
            ],
            plugins: [
              '@babel/plugin-transform-flow-strip-types',
              'babel-plugin-transform-typescript-metadata',
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer', // Ensure scripts are loaded asynchronously
    }),
    new Dotenv(), // Add this line to load environment variables
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' }, // Copy all files from public to the root of the output directory
      ],
    }),    
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 8081,
    historyApiFallback: true,
  },
  mode: 'development',
  stats: 'verbose',
};
