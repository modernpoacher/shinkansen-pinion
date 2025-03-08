// @ts-nocheck

import debug from 'debug'

import toAnswerValue from '#pinion/transformers/check-answers/to-answer-value'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

export default function getOneOfSelectedItemsValue (items = [], selectedItems = []) {
  log('getOneOfSelectedItemsValue')

  info(items, selectedItems)

  return (
    selectedItems.reduce((accumulator, selectedItem) => {
      if (selectedItem in items) {
        const item = items[selectedItem]

        return accumulator + toAnswerValue(item)
      }

      return accumulator
    }, '') // || 'Not answered'
  )
}
