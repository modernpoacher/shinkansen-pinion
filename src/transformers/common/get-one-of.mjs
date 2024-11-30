/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} [elements]
 * @returns {PinionTypes.ElementsOneOfType['oneOf'] | undefined}
 */
export default function getOneOf (elements = {}) {
  return (
    Reflect.get(elements, 'oneOf')
  )
}
