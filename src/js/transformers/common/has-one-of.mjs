/**
 *  @typedef {PinionTypes.OneOfType} OneOfType
 *
 *  @param {{ oneOf?: OneOfType }} [elements]
 *  @returns {elements is { oneOf: OneOfType }}
 */
export default function hasOneOf (elements) {
  if (elements) {
    return (
      'oneOf' in elements
    )
  }

  return false
}
