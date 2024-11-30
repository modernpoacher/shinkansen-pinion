import debug from 'debug'

import getAnyOfSelectedItemsValue from './get-any-of-selected-items-value.mjs'
import getAnyOfSelectedItemValue from './get-any-of-selected-item-value.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 * @param {PinionTypes.ElementsAnyOfType} [elements]
 * @returns {string | null}
 */
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
