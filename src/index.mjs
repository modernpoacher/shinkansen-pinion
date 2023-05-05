import debug from 'debug'

const log = debug('shinkansen-pinion')

log('`shinkansen` is awake')

export * as components from './components/index.mjs'
export * as transformers from './transformers/index.mjs'
export { default as Pinion } from './components/pinion/index.cjs'
