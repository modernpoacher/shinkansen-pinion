require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-pinion/components/common/text-content')

log('`shinkansen` is awake')

const {
  default: component
} = require('./index.jsx')

module.exports = component
