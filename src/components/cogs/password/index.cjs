require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/cogs/password')

log('`shinkansen` is awake')

const {
  PasswordCog
} = require('shinkansen-cogs')

module.exports = PasswordCog
