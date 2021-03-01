const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const srcPath = path.resolve(__dirname, 'src')
const isProd = process.env.NODE_ENV === 'production'

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(srcPath, 'index.html'),
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
    ],
  }),
  !isProd && new ReactRefreshWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name]-[hash].css',
  }),
  new ForkTsCheckerPlugin(),
].filter(Boolean)

const getCssRules = (withModules) => {
  return [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '',
      },
    },
    withModules
      ? {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: !isProd
                ? '[path][name]__[local]'
                : '[hash:base64]',
            },
          },
        }
      : 'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer'],
        },
      },
    },
    'sass-loader',
  ]
}

module.exports = {
  entry: ['@babel/polyfill', path.join(srcPath, 'index.tsx')],
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias: {
      '@components': path.resolve(srcPath, 'components'),
      '@store': path.resolve(srcPath, 'store'),
      '@utils': path.resolve(srcPath, 'utils'),
      '@config': path.resolve(srcPath, 'config'),
      '@pages': path.resolve(srcPath, 'pages'),
      '@styles': path.resolve(srcPath, 'styles'),
    },
  },
  target: isProd ? 'browserslist' : 'web',
  module: {
    rules: [
      {
        test: /\.([tj])sx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.module\.s?css$/,
        use: getCssRules(true),
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: getCssRules(false),
      },
      {
        test: /\.(png|svg|jpg|gif|woff|ttf|eot)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kb
          },
        },
      },
    ],
  },
  plugins,
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
}
