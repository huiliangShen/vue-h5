'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WX_CONFIG:{
    appId: '"wx3b46a80c7fbd65b4"',
    secret: '"848b7010f25c873dc65248e0a95af14a"',
    redirect_outh: '"http://sunnyo.free.ngrok.cc/#/redirect"'
  }
})
