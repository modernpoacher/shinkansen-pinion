// @ts-nocheck

import debug from 'debug'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 * @param {PinionTypes.MemberArrayType} [items]
 * @param {PinionTypes.SelectedMemberArrayType} [selectedItems]
 * @returns {string}
 */
export default function getEnumSelectedItemValue (items = [], [selectedItem] = []) {
  log('getEnumSelectedItemValue')

  if (selectedItem in items) {
    const item = items[selectedItem]

    return String(item)
  }

  return ''
}
