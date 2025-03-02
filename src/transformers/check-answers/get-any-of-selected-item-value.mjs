// @ts-nocheck

import debug from 'debug'

import toAnswerValue from '#pinion/transformers/check-answers/to-answer-value'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 * @param {PinionTypes.MemberArrayType} [items]
 * @param {PinionTypes.SelectedMemberArrayType} [selectedItems]
 * @returns {string}
 */
export default function getAnyOfSelectedItemValue (items = [], [selectedItem] = []) {
  log('getAnyOfSelectedItemValue')

  if (selectedItem in items) {
    const item = items[selectedItem]

    return toAnswerValue(item)
  }

  return '' // 'Not answered'
}
