import debug from 'debug'

const log = debug('shinkansen-pinion/components')

log('`shinkansen` is awake')

export { default as CheckAnswers } from './check-answers/index.cjs'
export * as common from './common/index.mjs'
export { default as ErrorSummary } from './error-summary/index.cjs'
export { default as Pinion } from '../pinion/index.cjs'
