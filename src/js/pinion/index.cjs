require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/pinion')

log('`shinkansen` is awake')

const {
  default: Pinion
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Pinion
