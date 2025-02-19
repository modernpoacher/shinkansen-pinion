import debug from 'debug'

import transformAnswerValue from './transform-answer-value.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 *  @param {PinionTypes.AnswerType} anser
 *  @returns {string | null}
 */
export default function getAnswerValue ({ elements = {} }) {
  log('getAnswerValue')

  return transformAnswerValue(elements)
}
