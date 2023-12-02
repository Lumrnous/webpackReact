const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  // 打包模式
  mode: 'development',
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    // 在下一次打包时，删除原来的dist目录
    clean: true
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        // 此处没有写配置，则它会打目录下面有的babel.config.js配置文件
        loader: 'babel-loader'
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      inject: 'body'
    })
  ],
  resolve: {
    // 自动解析文件扩展名，在引入时自动补全
    extensions: ['.js', '.jsx']
  },
  
}
