// @ts-nocheck

import debug from 'debug'

import getAnswerTitle from '#pinion/transformers/check-answers/get-answer-title'
import getAnswerValue from '#pinion/transformers/check-answers/get-answer-value'
import getChangeAnswer from '#pinion/transformers/check-answers/get-change-answer'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 *  @param {PinionTypes.AnswerType} answer
 *  @param {PinionTypes.ResourceType} resource
 *  @returns {PinionTypes.TypeBooleanAnswerType}
 */
export default function transformTypeBooleanAnswer (answer, resource) {
  log('transformTypeBooleanAnswer')

  return {
    type: 'BOOLEAN',
    params: {
      answer: {
        title: getAnswerTitle(answer),
        value: getAnswerValue(answer)
      },
      changeAnswer: getChangeAnswer(answer, resource)
    }
  }
}
