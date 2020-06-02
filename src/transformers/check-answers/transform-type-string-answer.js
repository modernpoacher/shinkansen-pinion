import debug from 'debug'

import getAnswerTitle from './get-answer-title'
import getAnswerValue from './get-answer-value'
import getChangeAnswer from './get-change-answer'

const log = debug('shinkansen:pinion:transformers:check-answers')

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
