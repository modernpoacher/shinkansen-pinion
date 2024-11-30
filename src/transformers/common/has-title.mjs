/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {boolean}
 */
export default function hasTtile (elements = {}) {
  return (
    Reflect.has(elements, 'title')
  )
}
