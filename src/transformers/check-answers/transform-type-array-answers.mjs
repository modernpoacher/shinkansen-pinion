import debug from 'debug'

import getAnswerTitle from './get-answer-title.mjs'
import getAnswerValue from './get-answer-value-for-type-array.mjs'
import getChangeAnswer from './get-change-answer.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 *  @param {PinionTypes.AnswerType[]} [answers]
 *  @param {PinionTypes.ResourceType} [resource]
 *  @returns {PinionTypes.TypeArrayAnswerType}
 */
export default function transformTypeArrayAnswers (answers = [], resource = {}) {
  log('transformTypeArrayAnswers')

  const [
    answer
  ] = answers

  return {
    type: 'ARRAY',
    params: {
      answer: {
        title: getAnswerTitle(answer),
        value: getAnswerValue(answers)
      },
      changeAnswer: getChangeAnswer(answer, resource)
    }
  }
}
