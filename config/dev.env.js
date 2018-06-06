'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WX_CONFIG:{
    appId: 'wx2d41a2b148345456',
    secret: '324ef84d7d07e21827945f1327347341',
    redirect_outh: 'http://wx.webui.info/wx/oauth-url'
  }
})
