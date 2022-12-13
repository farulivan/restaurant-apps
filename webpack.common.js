const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      favicon: path.resolve(
        __dirname,
        'src/public/images/favicon/findresto.ico',
      ),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
    new WebpackPwaManifest({
      id: 'find-resto-pwa-1',
      name: 'Find Resto',
      short_name: 'findresto',
      description: 'Easy to find the restaurant you want',
      background_color: '#ffffff',
      theme_color: '#6768AB',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('src/public/images/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
        {
          src: path.resolve('src/public/images/icons/maskable-icon.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
        {
          src: path.resolve('src/public/images/icons/ios-icon.png'),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve('src/public/images/icons/ios-icon.png'),
          size: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup',
        },
        {
          src: path.resolve('src/public/images/icons/android-icon.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('icons', 'android'),
        },
      ],
    }),
  ],
};
