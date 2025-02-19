/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {boolean}
 */
export default function hasOneOf (elements) {
  if (elements) {
    return (
      Reflect.has(elements, 'oneOf')
    )
  }

  return false
}
