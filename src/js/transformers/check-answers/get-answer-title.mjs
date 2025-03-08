import debug from 'debug'

import transformAnswerTitle from '#pinion/transformers/check-answers/transform-answer-title'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 *  @param {PinionTypes.AnswerType} answer
 *  @returns {string | null | undefined}
 */
export default function getAnswerTitle ({ elements }) {
  log('getAnswerTitle')

  return transformAnswerTitle(elements)
}
