import debug from 'debug'

import hasValue from '#pinion/transformers/common/has-value'
import getValue from '#pinion/transformers/common/get-value'

const log = debug('shinkansen-pinion/transformers/check-answers')

export default function transformFieldValue (field = {}) {
  log('transformFieldValue')

  return (
    hasValue(field)
      ? getValue(field)
      : ''
  )
}
