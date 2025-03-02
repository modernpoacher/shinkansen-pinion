/**
 *  @typedef {PinionTypes.AnswerType[]} GroupType
 */

import debug from 'debug'

import transformAnswerValue from '#pinion/transformers/check-answers/transform-answer-value'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 *  @param {GroupType} group
 *  @returns {Array<string | null | undefined>}
 */
export default function getAnswerValueForTypeObject (group = []) {
  log('getAnswerValueForTypeObject')

  return (
    group
      .map(({ elements }) => transformAnswerValue(elements))
  )
}
