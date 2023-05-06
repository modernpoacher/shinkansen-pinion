require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-pinion/pinion')

log('`shinkansen` is awake')

module.exports = require('./index.jsx')
