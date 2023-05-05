require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-pinion')

log('`shinkansen` is awake')

const { default: Pinion } = require('./components/pinion/index.cjs')

console.log(Pinion)

module.exports.Pinion = Pinion
