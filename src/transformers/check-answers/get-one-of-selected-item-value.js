import debug from 'debug'

import toAnswerValue from './to-answer-value'

const log = debug('shinkansen-pinion:transformers:check-answers')

export default function getOneOfSelectedItemValue (items = [], [selectedItem] = []) {
  log('getOneOfSelectedItemValue')

  return (Reflect.has(items, selectedItem))
    ? toAnswerValue(Reflect.get(items, selectedItem)) // || 'Not answered'
    : '' // 'Not answered'
}
