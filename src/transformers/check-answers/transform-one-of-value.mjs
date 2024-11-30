import debug from 'debug'

import getOneOfSelectedItemsValue from './get-one-of-selected-items-value.mjs'
import getOneOfSelectedItemValue from './get-one-of-selected-item-value.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 * @param {PinionTypes.ElementsOneOfType} [elements]
 * @returns {string | null}
 */
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
