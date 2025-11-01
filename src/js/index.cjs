require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion')

log('`shinkansen` is awake')

const components = require('./components/index.cjs')
const transformers = require('./transformers/index.mjs')
const Pinion = require('./pinion/index.cjs')

module.exports.components = components
module.exports.transformers = transformers
module.exports.Pinion = Pinion
