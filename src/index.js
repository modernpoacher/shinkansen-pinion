import debug from 'debug'

const log = debug('shinkansen-pinion')

log('`pinion` is awake')

export * as components from './components'
export * as transformers from './transformers'

export Pinion from './components/pinion'
