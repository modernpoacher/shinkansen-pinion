import debug from 'debug'

import transformAnswerValue from './transform-answer-value'

const log = debug('shinkansen:pinion:transformers:check-answers')

export default function getAnswerValueForTypeArray (group = []) {
  log('getAnswerValueForTypeArray')

  return (
    group
      .map(({ elements = {} }) => transformAnswerValue(elements))
  )
}
