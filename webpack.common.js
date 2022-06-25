const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src')
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'src/js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
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
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer'),
                  ];
                },
              },
            },
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/img/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'coinbase.com + Bootstrap - Luis Badiali',
      description: 'Página principal de coinbase.com maquetada con Bootstrap - Luis Badiali',
      filename: 'index.html',
      template: 'src/views/index.hbs',
    }),
    new MiniCssExtractPlugin({
      filename: 'src/css/[name].css',
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*.hbs`,  { nodir: true }),
    }),
  ],
};