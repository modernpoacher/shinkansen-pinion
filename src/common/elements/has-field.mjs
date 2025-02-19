/**
 *  @typedef {PinionTypes.ElementsType} ElementsType
 *  @typedef {PinionTypes.ElementsEnumType} ElementsEnumType
 *  @typedef {PinionTypes.ElementsAnyOfType} ElementsAnyOfType
 *  @typedef {PinionTypes.ElementsOneOfType} ElementsOneOfType
 *  @typedef {PinionTypes.ElementsFieldType} ElementsFieldType
 */

import hasEnum from './has-enum.mjs'
import hasAnyOf from './has-any-of.mjs'
import hasOneOf from './has-one-of.mjs'

/**
 *  @overload
 *  @param {ElementsEnumType | ElementsAnyOfType | ElementsOneOfType | ElementsFieldType} elements
 *  @returns {elements is ElementsFieldType}
 *
 *  @param {ElementsType} elements
 *  @returns {boolean}
 */
export default function hasField (elements) {
  return !(
    hasEnum(elements) ||
    hasAnyOf(elements) ||
    hasOneOf(elements)
  )
}
