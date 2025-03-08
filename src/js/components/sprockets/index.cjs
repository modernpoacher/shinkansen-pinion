require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/sprockets')

log('`shinkansen` is awake')

module.exports.CheckAnswers = require('./check-answers/index.cjs')
module.exports.ErrorSummary = require('./error-summary/index.cjs')
module.exports.Fieldset = require('./fieldset/index.cjs')
