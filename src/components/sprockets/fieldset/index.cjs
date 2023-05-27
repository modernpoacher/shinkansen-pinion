require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/sprockets/fieldset')

log('`shinkansen` is awake')

const {
  FieldsetSprocket
} = require('shinkansen-sprockets')

module.exports = FieldsetSprocket
