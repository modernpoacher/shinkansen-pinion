// @ts-nocheck

import debug from 'debug'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

/**
 * @param {PinionTypes.MemberArrayType} [items]
 * @param {PinionTypes.SelectedMemberArrayType} [selectedItems]
 * @returns {string}
 */
export default function getEnumSelectedItemValue (items = [], [selectedItem] = []) {
  log('getEnumSelectedItemValue')

  info(items, selectedItem)

  if (selectedItem in items) {
    const item = items[selectedItem]

    return String(item)
  }

  return ''
}
