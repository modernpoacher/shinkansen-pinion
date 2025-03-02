import debug from 'debug'

const log = debug('shinkansen-pinion/components')

log('`shinkansen` is awake')

export * as Cogs from './cogs/index.mjs'
export * as Sprockets from './sprockets/index.mjs'
