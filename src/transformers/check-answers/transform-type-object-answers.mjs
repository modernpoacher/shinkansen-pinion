import debug from 'debug'

import getAnswerTitle from './get-answer-title.mjs'
import getAnswerValue from './get-answer-value-for-type-object.mjs'
import getChangeAnswer from './get-change-answer.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 * @param {PinionTypes.AnswerType[]} [answers]
 * @param {PinionTypes.ResourceType} [resource]
 * @returns {PinionTypes.TypeObjectAnswerType}
 */
export default function transformTypeObjectAnswers (answers = [], resource = {}) {
  log('transformTypeObjectAnswers')

  const [
    answer
  ] = answers

  return {
    type: 'OBJECT',
    params: {
      answer: {
        title: getAnswerTitle(answer),
        value: getAnswerValue(answers)
      },
      changeAnswer: getChangeAnswer(answer, resource)
    }
  }
}
