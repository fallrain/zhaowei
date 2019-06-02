'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  redirect_uri: '"http://hospital.nonggaogroup.com/mobile/wx/redirect/greet"',
  base_url: '"/rbh/"',
  front_base_url: '"http://hospital.nonggaogroup.com"',
  app_id:'"wx4b3956842d39bc95"',
  back_auth_url: '"http://hospital.nonggaogroup.com/wuye/wx/redirect/greet"'
})
