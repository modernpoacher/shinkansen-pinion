/**
 *  @overload
 *  @param {{ title: string }} elements
 *  @returns {string}
 *
 *  @param {{ title?: string }} [elements]
 *  @returns {string | undefined}
 */
export default function getTitle (elements) {
  if (elements) {
    return (
      elements.title
    )
  }
}
