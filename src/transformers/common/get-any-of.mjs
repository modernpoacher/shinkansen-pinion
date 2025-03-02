/**
 *  @typedef {PinionTypes.AnyOfType} AnyOfType
 *
 *  @overload
 *  @param {{ anyOf: AnyOfType }} elements
 *  @returns {AnyOfType}
 *
 *  @param {{ anyOf?: AnyOfType }} [elements]
 *  @returns {AnyOfType | undefined}
 */
export default function getAnyOf (elements) {
  if (elements) {
    return (
      elements.anyOf // Reflect.get(elements, 'anyOf')
    )
  }
}
