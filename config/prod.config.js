const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')
const config = {}

module.exports = merge(baseConfig, config)
