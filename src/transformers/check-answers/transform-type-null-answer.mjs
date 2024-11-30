import debug from 'debug'

import getAnswerTitle from './get-answer-title.mjs'
import getAnswerValue from './get-answer-value.mjs'
import getChangeAnswer from './get-change-answer.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 * @param {PinionTypes.AnswerType} answer
 * @param {PinionTypes.ResourceType} resource
 * @returns {PinionTypes.TypeNullAnswerType}
 */
export default function transformTypeNullAnswer (answer, resource) {
  log('transformTypeNullAnswer')

  return {
    type: 'NULL',
    params: {
      answer: {
        title: getAnswerTitle(answer),
        value: getAnswerValue(answer)
      },
      changeAnswer: getChangeAnswer(answer, resource)
    }
  }
}
