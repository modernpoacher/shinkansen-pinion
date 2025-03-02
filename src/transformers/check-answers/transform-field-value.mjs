/**
 *  @typedef {PinionTypes.MemberType} MemberType
 *  @typedef {PinionTypes.MemberArrayType} MemberArrayType
 */

import debug from 'debug'

import hasValue from '#pinion/transformers/common/has-value'
import getValue from '#pinion/transformers/common/get-value'

const log = debug('shinkansen-pinion/transformers/check-answers')
const info = debug('shinkansen-pinion/transformers/check-answers:info')

/**
 *  @param {{ value?: MemberType | MemberArrayType }} [field]
 *  @returns {string | undefined}
 */
export default function transformFieldValue (field = {}) {
  log('transformFieldValue')

  info(field)

  return (
    hasValue(field)
      ? getValue(field)
      : ''
  )
}
