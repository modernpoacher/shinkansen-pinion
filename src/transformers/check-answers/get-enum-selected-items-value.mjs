// @ts-nocheck

import debug from 'debug'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 * @param {PinionTypes.MemberArrayType} [items]
 * @param {PinionTypes.SelectedMemberArrayType} [selectedItems]
 * @returns {string}
 */
export default function getEnumSelectedItemsValue (items = [], selectedItems = []) {
  log('getEnumSelectedItemsValue')

  return (
    selectedItems.reduce((accumulator, selectedItem) => {
      if (selectedItem in items) {
        const item = items[selectedItem]

        return accumulator + item
      }

      return accumulator
    }, '') // || 'Not answered'
  )
}
