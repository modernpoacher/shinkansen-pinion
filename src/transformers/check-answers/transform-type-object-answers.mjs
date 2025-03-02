// @ts-nocheck

import debug from 'debug'

import getAnswerTitle from '#pinion/transformers/check-answers/get-answer-title'
import getAnswerValue from '#pinion/transformers/check-answers/get-answer-value-for-type-object'
import getChangeAnswer from '#pinion/transformers/check-answers/get-change-answer'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

/**
 *  @param {PinionTypes.AnswerType[]} [answers]
 *  @param {PinionTypes.ResourceType} [resource]
 *  @returns {PinionTypes.TypeObjectAnswerType}
 */
export default function transformTypeObjectAnswers (answers = [], resource = {}) {
  log('transformTypeObjectAnswers')

  const [
    answer
  ] = answers

  info(answer, answers)

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
