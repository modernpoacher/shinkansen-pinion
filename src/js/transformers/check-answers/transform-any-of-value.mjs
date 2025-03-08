/**
 *  @typedef {PinionTypes.MemberArrayType} MemberArrayType
 *  @typedef {PinionTypes.SelectedMemberArrayType} SelectedMemberArrayType
 */

import debug from 'debug'

import getAnyOfSelectedItemsValue from '#pinion/transformers/check-answers/get-any-of-selected-items-value'
import getAnyOfSelectedItemValue from '#pinion/transformers/check-answers/get-any-of-selected-item-value'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

/**
 *  @param {{ items?: MemberArrayType, selectedItems?: SelectedMemberArrayType }} [field]
 *  @returns {string | null}
 */
export default function transformAnyOfValue ({ items = [], selectedItems = [] } = {}) {
  log('transformAnyOfValue')

  info(items, selectedItems)

  if (selectedItems.length < 1) {
    return ''
  } else {
    if (selectedItems.length > 1) {
      return getAnyOfSelectedItemsValue(items, selectedItems)
    }
  }

  return getAnyOfSelectedItemValue(items, selectedItems)
}
