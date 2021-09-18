import debug from 'debug'

import getAnyOfSelectedItemsValue from './get-any-of-selected-items-value'
import getAnyOfSelectedItemValue from './get-any-of-selected-item-value'

const log = debug('shinkansen-pinion:transformers:check-answers')

export default function transformAnyOfValue ({ items, selectedItems } = {}) {
  log('transformAnyOfValue')

  if (selectedItems.length < 1) {
    return ''
  } else {
    if (selectedItems.length > 1) {
      return getAnyOfSelectedItemsValue(items, selectedItems)
    }
  }

  return getAnyOfSelectedItemValue(items, selectedItems)
}
