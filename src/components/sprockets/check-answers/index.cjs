require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/sprockets/check-answers')

log('`shinkansen` is awake')

const {
  CheckAnswersSprocket
} = require('shinkansen-sprockets')

module.exports = CheckAnswersSprocket
