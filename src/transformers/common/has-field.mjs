/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {boolean}
 */
export default function hasField (elements) {
  if (elements) {
    return (
      Reflect.has(elements, 'field')
    )
  }

  return false
}
