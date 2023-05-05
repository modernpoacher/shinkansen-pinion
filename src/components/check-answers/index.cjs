require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-pinion/components/check-answers')

log('`shinkansen` is awake')

const {
  CheckAnswersSprocket
} = require('shinkansen-sprockets/sprockets')

console.log(require('shinkansen-sprockets/sprockets'))

module.exports = CheckAnswersSprocket
