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
export default function transformTypeStringAnswer (answer, resource) {
  log('transformTypeStringAnswer')

  return {
    type: 'STRING',
    params: {
      answer: {
        title: getAnswerTitle(answer),
        value: getAnswerValue(answer)
      },
      changeAnswer: getChangeAnswer(answer, resource)
    }
  }
}
