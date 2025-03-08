/**
 *  @typedef {PinionTypes.ObjectType} ObjectType
 *
 *  @typedef {PinionTypes.MetaType} MetaType
 *  @typedef {PinionTypes.MetaEnumType} MetaEnumType
 *  @typedef {PinionTypes.MetaAnyOfType} MetaAnyOfType
 *  @typedef {PinionTypes.MetaOneOfType} MetaOneOfType
 *  @typedef {PinionTypes.MetaFieldType} MetaFieldType
 */

/**
 *  @overload
 *  @param {MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType} meta
 *  @returns {ObjectType}
 *
 *  @param {MetaType} meta
 *  @returns {ObjectType}
 */
export default function getSchema ({ schema = {} }) {
  return schema
}
