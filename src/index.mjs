import debug from 'debug'

import {
  components,
  transformers,
  Pinion
} from './index.cjs'

const log = debug('shinkansen-pinion')

log('`shinkansen` is awake')

export {
  components,
  transformers,
  Pinion
}
