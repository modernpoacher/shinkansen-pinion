import debug from 'debug'

const log = debug('shinkansen-pinion/components/sprockets')

log('`shinkansen` is awake')

export { default as RadioCog } from './radio/index.cjs'
export { default as SelectCog } from './select/index.cjs'
export { default as TextCog } from './text/index.cjs'
