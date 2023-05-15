require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/cogs/select')

log('`shinkansen` is awake')

const {
  SelectCog
} = require('shinkansen-cogs')

module.exports = SelectCog
