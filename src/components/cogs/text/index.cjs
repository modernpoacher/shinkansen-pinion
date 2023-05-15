require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/cogs/text')

log('`shinkansen` is awake')

const {
  TextCog
} = require('shinkansen-cogs')

module.exports = TextCog
