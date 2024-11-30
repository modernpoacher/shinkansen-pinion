require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pinion/components/sprockets')

log('`shinkansen` is awake')

module.exports.CheckboxCog = require('./checkbox/index.cjs')
module.exports.EmailCog = require('./email/index.cjs')
module.exports.NumberCog = require('./number/index.cjs')
module.exports.PasswordCog = require('./password/index.cjs')
module.exports.RadioCog = require('./radio/index.cjs')
module.exports.SelectCog = require('./select/index.cjs')
module.exports.TextCog = require('./text/index.cjs')
module.exports.TextareaCog = require('./textarea/index.cjs')
