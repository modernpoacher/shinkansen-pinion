/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {boolean}
 */
export default function hasEnum (elements = {}) {
  return (
    Reflect.has(elements, 'enum')
  )
}
