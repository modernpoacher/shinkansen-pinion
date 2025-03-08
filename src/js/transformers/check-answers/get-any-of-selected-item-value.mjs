// @ts-nocheck

import debug from 'debug'

import toAnswerValue from '#pinion/transformers/check-answers/to-answer-value'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

/**
 *  @param {PinionTypes.MemberArrayType} [items]
 *  @param {PinionTypes.SelectedMemberArrayType} [selectedItems]
 *  @returns {string}
 */
export default function getAnyOfSelectedItemValue (items = [], [selectedItem] = []) {
  log('getAnyOfSelectedItemValue')

  info(items, selectedItem)

  if (selectedItem in items) {
    const item = items[selectedItem]

    return toAnswerValue(item)
  }

  return '' // 'Not answered'
}
