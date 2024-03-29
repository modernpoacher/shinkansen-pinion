require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/sprockets/error-summary')

log('`shinkansen` is awake')

const {
  ErrorSummarySprocket
} = require('shinkansen-sprockets')

module.exports = ErrorSummarySprocket
