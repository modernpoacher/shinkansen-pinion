/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {PinionTypes.ElementsType['description'] | undefined}
 */
export default function getDescription (elements = {}) {
  return (
    Reflect.get(elements, 'description')
  )
}
