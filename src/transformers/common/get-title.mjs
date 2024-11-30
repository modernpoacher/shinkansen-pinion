/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {PinionTypes.ElementsType['title'] | undefined}
 */
export default function getTitle (elements = {}) {
  return (
    Reflect.get(elements, 'title')
  )
}
