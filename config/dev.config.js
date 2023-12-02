const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')
const config = {
  // 开发服务器
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    // 自动打开浏览器
    open: true
  }
}

module.exports = merge(baseConfig, config)
