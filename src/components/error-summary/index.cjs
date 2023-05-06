require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-pinion/components/error-summary')

log('`shinkansen` is awake')

const {
  ErrorSummarySprocket
} = require('shinkansen-sprockets')

module.exports = ErrorSummarySprocket
