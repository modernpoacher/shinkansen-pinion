/**
 *  @typedef {PinionTypes.OneOfType} OneOfType
 *
 *  @overload
 *  @param {{ oneOf: OneOfType }} elements
 *  @returns {OneOfType}
 *
 *  @param {{ oneOf?: OneOfType }} [elements]
 *  @returns {OneOfType | undefined}
 */
export default function getOneOf (elements) {
  if (elements) {
    return (
      elements.oneOf // Reflect.get(elements, 'oneOf')
    )
  }
}
