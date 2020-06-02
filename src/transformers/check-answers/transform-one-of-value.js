import debug from 'debug'

import getOneOfSelectedItemsValue from './get-one-of-selected-items-value'
import getOneOfSelectedItemValue from './get-one-of-selected-item-value'

const log = debug('shinkansen:pinion:transformers:check-answers')

export default function transformOneOfValue ({ items, selectedItems } = {}) {
  log('transformOneOfValue')

  if (selectedItems.length < 1) {
    return ''
  } else {
    if (selectedItems.length > 1) {
      return getOneOfSelectedItemsValue(items, selectedItems)
    }
  }

  return getOneOfSelectedItemValue(items, selectedItems)
}
