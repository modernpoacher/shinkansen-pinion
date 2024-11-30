/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {boolean}
 */
export default function hasOneOf (elements = {}) {
  return (
    Reflect.has(elements, 'oneOf')
  )
}
