const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'src/js/bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    watchFiles: ['src/**/*.hbs'],
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                },
              },
            },
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/img/[name][ext]'
        },
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/fonts/[name][ext]'
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['mozjpeg', {
                progressive: true,
                quality: 60,
              }],
            ],
          },
        },
      }),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Coinbase Bootstrap - Luis Badiali',
      description: 'Coinbase Bootstrap - Luis Badiali',
      bodyClass: 'Coinbase maquetado con Bootstrap - Luis Badiali',
      filename: 'index.html',
      template: 'src/views/index.hbs',
      minify: true
    }),
    new MiniCssExtractPlugin({
      filename: 'src/css/[name].css'
    }),
  ],
};