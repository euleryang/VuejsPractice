const path = require("path")

module.exports = {
  // 入口文件
  entry: './src/app.js',
  // 编译输出文件
  output: {
    path: path.join(__dirname, "./dist1"),
    filename: 'build.js'
  },
  resolve: {
    alias: {
      // 因为我们这里用的是 require 引入方式，所以应该使用vue.common.js/vue.js/vue.min.js
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  // 这里添加的是有关 webpack-dev-server 的配置
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    // 这里定义 webpack-dev-server 开启的web服务的根目录
    contentBase: './'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        use: 'url-loader'
      },
      {
        test: /.vue$/,
        use: 'vue-loader'
      },
      {
        test: /.js$/,
        use: 'babel-loader'
      }
    ]
  }


}