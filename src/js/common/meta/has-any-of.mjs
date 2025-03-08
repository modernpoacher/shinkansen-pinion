/**
 *  @typedef {PinionTypes.MetaType} MetaType
 *  @typedef {PinionTypes.MetaEnumType} MetaEnumType
 *  @typedef {PinionTypes.MetaAnyOfType} MetaAnyOfType
 *  @typedef {PinionTypes.MetaOneOfType} MetaOneOfType
 *  @typedef {PinionTypes.MetaFieldType} MetaFieldType
 */

import getSchema from './get-schema.mjs'

/**
 *  @overload
 *  @param {MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType} meta
 *  @returns {meta is MetaAnyOfType}
 *
 *  @param {MetaType} meta
 *  @returns {boolean}
 */
export default function hasAnyOf (meta) {
  return (
    'anyOf' in getSchema(meta)
  )
}
