require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/sprockets')

log('`shinkansen` is awake')

module.exports.RadioCog = require('./radio/index.cjs')
module.exports.SelectCog = require('./select/index.cjs')
module.exports.TextCog = require('./text/index.cjs')
