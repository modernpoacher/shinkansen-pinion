require('@babel/register')({ ignore: [] })

const debug = require('debug')

const {
  default: component
} = require('./index.jsx')

const log = debug('shinkansen-pinion/pinion')

log('`shinkansen` is awake')

module.exports = component
