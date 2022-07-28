const debug = require('debug')

const log = debug('shinkansen-pinion')

log('`pinion` is awake')

module.exports = require('./lib')
