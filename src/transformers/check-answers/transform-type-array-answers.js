import debug from 'debug'

import getAnswerTitle from './get-answer-title'
import getAnswerValue from './get-answer-value-for-type-array'
import getChangeAnswer from './get-change-answer'

const log = debug('shinkansen:pinion:transformers:check-answers')

export default function transformTypeArrayAnswers (answers = [], resource) {
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
