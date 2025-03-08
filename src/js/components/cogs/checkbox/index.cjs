require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/cogs/checkbox')

log('`shinkansen` is awake')

const {
  CheckboxCog
} = require('shinkansen-cogs')

module.exports = CheckboxCog
