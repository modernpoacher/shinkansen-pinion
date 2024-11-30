/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {PinionTypes.ElementsAnyOfType['anyOf'] | undefined}
 */
export default function getAnyOf (elements = {}) {
  return (
    Reflect.get(elements, 'anyOf')
  )
}
