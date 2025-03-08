require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/cogs/email')

log('`shinkansen` is awake')

const {
  EmailCog
} = require('shinkansen-cogs')

module.exports = EmailCog
