/**
 *  @typedef {PinionTypes.MetaType} MetaType
 *  @typedef {PinionTypes.MetaEnumType} MetaEnumType
 *  @typedef {PinionTypes.MetaAnyOfType} MetaAnyOfType
 *  @typedef {PinionTypes.MetaOneOfType} MetaOneOfType
 *  @typedef {PinionTypes.MetaFieldType} MetaFieldType
 */

import hasEnum from './has-enum.mjs'
import hasAnyOf from './has-any-of.mjs'
import hasOneOf from './has-one-of.mjs'

/**
 *  @overload
 *  @param {MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType} meta
 *  @returns {meta is MetaFieldType}
 *
 *  @param {MetaType} meta
 *  @returns {boolean}
 */
export default function hasField (meta) {
  return !(
    hasEnum(meta) ||
    hasAnyOf(meta) ||
    hasOneOf(meta)
  )
}
