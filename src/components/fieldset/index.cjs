require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinkansen-pinion/components/fieldset')

log('`shinkansen` is awake')

const {
  FieldsetSprocket
} = require('shinkansen-sprockets')

module.exports = FieldsetSprocket
