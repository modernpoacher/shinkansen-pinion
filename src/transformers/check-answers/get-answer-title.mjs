import debug from 'debug'

import transformAnswerTitle from './transform-answer-title.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

export default function getAnswerTitle ({ elements = {} }) {
  log('getAnswerTitle')

  return transformAnswerTitle(elements)
}
