import debug from 'debug'

import transformAnswerValue from './transform-answer-value'

const log = debug('shinkansen-pinion:transformers:check-answers')

export default function getAnswerValueForTypeObject (group = []) {
  log('getAnswerValueForTypeObject')

  return (
    group
      .map(({ elements = {} }) => transformAnswerValue(elements))
  )
}
