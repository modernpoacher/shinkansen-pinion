require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/cogs/number')

log('`shinkansen` is awake')

const {
  NumberCog
} = require('shinkansen-cogs')

module.exports = NumberCog
