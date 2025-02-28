require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const {
  default: component // @ts-ignore
} = require('./index.jsx')

const log = debug('shinkansen-pinion/pinion')

log('`shinkansen` is awake')

module.exports = component
