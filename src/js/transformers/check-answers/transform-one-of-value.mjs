/**
 *  @typedef {PinionTypes.MemberArrayType} MemberArrayType
 *  @typedef {PinionTypes.SelectedMemberArrayType} SelectedMemberArrayType
 */

import debug from 'debug'

import getOneOfSelectedItemsValue from '#pinion/transformers/check-answers/get-one-of-selected-items-value'
import getOneOfSelectedItemValue from '#pinion/transformers/check-answers/get-one-of-selected-item-value'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

/**
 *  @param {{ items?: MemberArrayType, selectedItems?: SelectedMemberArrayType }} [field]
 *  @returns {string | null}
 */
export default function transformOneOfValue ({ items = [], selectedItems = [] } = {}) {
  log('transformOneOfValue')

  info(items, selectedItems)

  if (selectedItems.length < 1) {
    return ''
  } else {
    if (selectedItems.length > 1) {
      return getOneOfSelectedItemsValue(items, selectedItems)
    }
  }

  return getOneOfSelectedItemValue(items, selectedItems)
}
