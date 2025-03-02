require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components')

log('`shinkansen` is awake')

module.exports.Cogs = require('./cogs/index.cjs')
module.exports.Sprockets = require('./sprockets/index.cjs')
