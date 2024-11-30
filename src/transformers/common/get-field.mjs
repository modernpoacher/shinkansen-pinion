/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {PinionTypes.ElementsFieldType['field'] | undefined}
 */
export default function getField (elements = {}) {
  return (
    Reflect.get(elements, 'field')
  )
}
