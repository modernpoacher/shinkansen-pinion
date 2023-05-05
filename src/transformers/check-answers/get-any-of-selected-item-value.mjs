import debug from 'debug'

import toAnswerValue from './to-answer-value.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

export default function getAnyOfSelectedItemValue (items = [], [selectedItem] = []) {
  log('getAnyOfSelectedItemValue')

  return (Reflect.has(items, selectedItem))
    ? toAnswerValue(Reflect.get(items, selectedItem)) // || 'Not answered'
    : '' // 'Not answered'
}
