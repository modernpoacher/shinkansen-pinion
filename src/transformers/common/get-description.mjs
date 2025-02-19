/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {string | undefined}
 */
export default function getDescription (elements) {
  if (elements) {
    return (
      Reflect.get(elements, 'description')
    )
  }
}
