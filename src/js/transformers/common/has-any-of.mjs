/**
 *  @typedef {PinionTypes.AnyOfType} AnyOfType
 *
 *  @param {{ anyOf?: AnyOfType }} [elements]
 *  @returns {elements is { anyOf: AnyOfType }}
 */
export default function hasAnyOf (elements) {
  if (elements) {
    return (
      'anyOf' in elements
    )
  }

  return false
}
