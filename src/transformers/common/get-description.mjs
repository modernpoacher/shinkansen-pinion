/**
 *  @overload
 *  @param {{ description: string }} elements
 *  @returns {string}
 *
 *  @param {{ description?: string }} [elements]
 *  @returns {string | undefined}
 */
export default function getDescription (elements) {
  if (elements) {
    return (
      elements.description // Reflect.get(elements, 'description')
    )
  }
}
