import debug from 'debug'

import getValue from 'shinkansen-pinion/transformers/common/get-value'

const log = debug('shinkansen:pinion:transformers:check-answers')

export default function toAnswerValue ({ elements } = {}) {
  log('toAnswerValue')

  const {
    title: value = getValue(elements)
  } = elements

  return value
}
