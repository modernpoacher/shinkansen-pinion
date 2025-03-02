// @ts-nocheck

import debug from 'debug'

import getValue from '#pinion/transformers/common/get-value'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

export default function toAnswerValue ({ elements } = {}) {
  log('toAnswerValue')

  const {
    title: value = getValue(elements)
  } = elements

  info(elements, value)
  return value
}
