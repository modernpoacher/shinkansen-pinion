import debug from 'debug'

import transformAnswerValue from '#pinion/transformers/check-answers/transform-answer-value'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 *  @param {PinionTypes.AnswerType} answer
 *  @returns {string | null | undefined}
 */
export default function getAnswerValue ({ elements }) {
  log('getAnswerValue')

  return transformAnswerValue(elements)
}
