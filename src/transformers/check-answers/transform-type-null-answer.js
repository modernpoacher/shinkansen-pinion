import debug from 'debug'

import getAnswerTitle from './get-answer-title'
import getAnswerValue from './get-answer-value'
import getChangeAnswer from './get-change-answer'

const log = debug('shinkansen-pinion:transformers:check-answers')

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
