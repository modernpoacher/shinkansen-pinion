/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {boolean}
 */
export default function hasAnyOf (elements = {}) {
  return (
    Reflect.has(elements, 'anyOf')
  )
}
