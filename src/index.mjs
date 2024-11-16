import debug from 'debug'

import * as components from './components/index.mjs'
import * as transformers from './transformers/index.mjs'
import Pinion from './pinion/index.cjs'

const log = debug('shinkansen-pinion')

log('`shinkansen` is awake')

export {
  components,
  transformers,
  Pinion
}
