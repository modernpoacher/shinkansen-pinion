import debug from 'debug'

const log = debug('shinkansen-pinion/components')

log('`shinkansen` is awake')

export { default as CheckAnswers } from './check-answers/index.cjs'
export { default as ErrorSummary } from './error-summary/index.cjs'
export { default as Fieldset } from './fieldset/index.cjs'
