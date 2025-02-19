/**
 *  @typedef {PinionTypes.ObjectType} ObjectType
 *
 *  @typedef {PinionTypes.ElementsType} ElementsType
 *  @typedef {PinionTypes.ElementsEnumType} ElementsEnumType
 *  @typedef {PinionTypes.ElementsAnyOfType} ElementsAnyOfType
 *  @typedef {PinionTypes.ElementsOneOfType} ElementsOneOfType
 *  @typedef {PinionTypes.ElementsFieldType} ElementsFieldType
 */

/**
 *  @overload
 *  @param {ElementsEnumType | ElementsAnyOfType | ElementsOneOfType | ElementsFieldType} elements
 *  @returns {elements is ElementsEnumType}
 *
 *  @param {ElementsType} elements
 *  @returns {boolean}
 */
export default function hasEnum (elements) {
  return (
    'enum' in elements
  )
}
