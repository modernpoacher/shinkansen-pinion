require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/cogs/textarea')

log('`shinkansen` is awake')

const {
  TextareaCog
} = require('shinkansen-cogs')

module.exports = TextareaCog
