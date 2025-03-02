// @ts-nocheck

import debug from 'debug'

import getAnswerTitle from '#pinion/transformers/check-answers/get-answer-title'
import getAnswerValue from '#pinion/transformers/check-answers/get-answer-value-for-type-array'
import getChangeAnswer from '#pinion/transformers/check-answers/get-change-answer'

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
