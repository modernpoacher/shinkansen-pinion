/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {PinionTypes.AnyOfType | undefined}
 */
export default function getAnyOf (elements) {
  if (elements) {
    return (
      Reflect.get(elements, 'anyOf')
    )
  }
}
