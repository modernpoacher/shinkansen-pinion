import debug from 'debug'

const log = debug('shinkansen-pinion/components/sprockets')

log('`shinkansen` is awake')

export { default as CheckboxCog } from './checkbox/index.cjs'
export { default as EmailCog } from './email/index.cjs'
export { default as NumberCog } from './number/index.cjs'
export { default as PasswordCog } from './password/index.cjs'
export { default as RadioCog } from './radio/index.cjs'
export { default as SelectCog } from './select/index.cjs'
export { default as TextCog } from './text/index.cjs'
export { default as TextareaCog } from './textarea/index.cjs'
