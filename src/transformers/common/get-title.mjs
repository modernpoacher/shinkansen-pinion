/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {string | undefined}
 */
export default function getTitle (elements) {
  if (elements) {
    return (
      Reflect.get(elements, 'title')
    )
  }
}
