/**
 *  @param {{ title?: string }} [elements]
 *  @returns {elements is { title: string }}
 */
export default function hasTitle (elements = {}) {
  return (
    'title' in elements
  )
}
