import debug from 'debug'

import getAnswerTitle from './get-answer-title'
import getAnswerValue from './get-answer-value-for-type-object'
import getChangeAnswer from './get-change-answer'

const log = debug('shinkansen:pinion:transformers:check-answers')

export default function transformTypeObjectAnswers (answers = [], resource) {
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
