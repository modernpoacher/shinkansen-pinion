/**
 *  @typedef {PinionTypes.MemberArrayType} MemberArrayType
 *  @typedef {PinionTypes.SelectedMemberArrayType} SelectedMemberArrayType
 */

import debug from 'debug'

import getEnumSelectedItemsValue from '#pinion/transformers/check-answers/get-enum-selected-items-value'
import getEnumSelectedItemValue from '#pinion/transformers/check-answers/get-enum-selected-item-value'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

/**
 *  @param {{ items?: MemberArrayType, selectedItems?: SelectedMemberArrayType }} [field]
 *  @returns {string | null}
 */
export default function transformEnumValue ({ items = [], selectedItems = [] } = {}) {
  log('transformEnumValue')

  info(items, selectedItems)

  if (selectedItems.length < 1) {
    return ''
  } else {
    if (selectedItems.length > 1) {
      return getEnumSelectedItemsValue(items, selectedItems)
    }
  }

  return getEnumSelectedItemValue(items, selectedItems)
}
