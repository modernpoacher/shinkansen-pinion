/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {PinionTypes.OneOfType | undefined}
 */
export default function getOneOf (elements) {
  if (elements) {
    return (
      Reflect.get(elements, 'oneOf')
    )
  }
}
