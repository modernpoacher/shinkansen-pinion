/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {boolean}
 */
export default function hasEnum (elements) {
  if (elements) {
    return (
      Reflect.has(elements, 'enum')
    )
  }

  return false
}
