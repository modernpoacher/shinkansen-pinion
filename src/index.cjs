require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-pinion')

log('`shinkansen` is awake')

const components = require('./components/index.mjs')
const transformers = require('./transformers/index.mjs')
const {
  default: Pinion
} = require('./pinion/index.cjs')

module.exports.components = components
module.exports.transformers = transformers
module.exports.Pinion = Pinion
