/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {PinionTypes.ElementsEnumType['enum'] | undefined}
 */
export default function getEnum (elements = {}) {
  return (
    Reflect.get(elements, 'enum')
  )
}
