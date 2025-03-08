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
 *  @returns {meta is MetaOneOfType}
 *
 *  @param {MetaType} meta
 *  @returns {boolean}
 */
export default function hasOneOf (meta) {
  return (
    'oneOf' in getSchema(meta)
  )
}
