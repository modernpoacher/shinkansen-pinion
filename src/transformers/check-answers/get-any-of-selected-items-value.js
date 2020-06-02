import debug from 'debug'

import toAnswerValue from './to-answer-value'

const log = debug('shinkansen:pinion:transformers:check-answers')

export default function getAnyOfSelectedItemsValue (items = [], selectedItems = []) {
  log('getAnyOfSelectedItemsValue')

  return (
    selectedItems.reduce((accumulator, selectedItem) => (
      (Reflect.has(items, selectedItem))
        ? accumulator.concat(toAnswerValue(Reflect.get(items, selectedItem)))
        : accumulator
    ), '') // || 'Not answered'
  )
}
