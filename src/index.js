import debug from 'debug'

const log = debug('shinkansen-pinion')

log('`pinion` is awake')

export * as components from './components'
export * as transformers from './transformers'

export { default as Pinion } from './components/pinion'
