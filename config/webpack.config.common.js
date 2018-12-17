/**
 * @file webpack common config
 * @author xiaozhihua
 * @date 2018-11-22 16:52:48
 */

const path = require('path')

const resolve = (...arg) => {
  return path.resolve('.', ...arg)
}

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    chunkFilename: "[name].[chunkhash:5].js",
    publicPath: ''
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve('src'),
      '$api': resolve('src/api'),
      '$common': resolve('src/common'),
      '$components': resolve('src/components'),
      '$store': resolve('src/store'),
      '$reducers': resolve('src/store/reducers'),
      '$actions': resolve('src/store/actions'),
      '$router': resolve('src/router'),
      '$style': resolve('src/style'),
      '$svg': resolve('src/svg')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'image/[name].[hash].[ext]',
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.svg/,
        use: ['svg-sprite-loader']
      }
    ]
  },
  plugins: [
  ]
}
