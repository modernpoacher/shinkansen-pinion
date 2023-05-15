require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/cogs/radio')

log('`shinkansen` is awake')

const {
  RadioCog
} = require('shinkansen-cogs')

module.exports = RadioCog
