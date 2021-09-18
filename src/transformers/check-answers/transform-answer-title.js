import debug from 'debug'

import hasTitle from 'shinkansen-pinion/transformers/common/has-title'
import getTitle from 'shinkansen-pinion/transformers/common/get-title'

const log = debug('shinkansen-pinion:transformers:check-answers')

export default function transformAnswerTitle (elements) {
  log('transformAnswerTitle')

  if (hasTitle(elements)) {
    return getTitle(elements)
  }

  return null
}
