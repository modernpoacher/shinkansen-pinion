/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {boolean}
 */
export default function hasAnyOf (elements) {
  if (elements) {
    return (
      Reflect.has(elements, 'anyOf')
    )
  }

  return false
}
