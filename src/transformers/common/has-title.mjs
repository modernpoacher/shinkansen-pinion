/**
 *  @param {{ title?: string }} [elements]
 *  @returns {boolean}
 */
export default function hasTitle (elements = {}) {
  return (
    Reflect.has(elements, 'title')
  )
}
