import debug from 'debug'

import getAnswerTitle from './get-answer-title.mjs'
import getAnswerValue from './get-answer-value.mjs'
import getChangeAnswer from './get-change-answer.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

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
