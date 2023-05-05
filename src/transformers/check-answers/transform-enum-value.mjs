import debug from 'debug'

import getEnumSelectedItemsValue from './get-enum-selected-items-value.mjs'
import getEnumSelectedItemValue from './get-enum-selected-item-value.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

export default function transformEnumValue ({ items, selectedItems } = {}) {
  log('transformEnumValue')

  if (selectedItems.length < 1) {
    return ''
  } else {
    if (selectedItems.length > 1) {
      return getEnumSelectedItemsValue(items, selectedItems)
    }
  }

  return getEnumSelectedItemValue(items, selectedItems)
}
