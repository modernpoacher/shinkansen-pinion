/**
 *  @typedef {PinionTypes.AnswerType[]} GroupType
 */

import debug from 'debug'

import transformAnswerValue from '#pinion/transformers/check-answers/transform-answer-value'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

/**
 *  @param {GroupType} group
 *  @returns {Array<string | null | undefined>}
 */
export default function getAnswerValueForTypeArray (group = []) {
  log('getAnswerValueForTypeArray')

  info(group)

  return (
    group
      .map(({ elements }) => transformAnswerValue(elements))
  )
}
