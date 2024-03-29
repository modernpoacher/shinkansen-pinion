import debug from 'debug'

import transformAnswerValue from './transform-answer-value.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

export default function getAnswerValue ({ elements = {} }) {
  log('getAnswerValue')

  return transformAnswerValue(elements)
}
