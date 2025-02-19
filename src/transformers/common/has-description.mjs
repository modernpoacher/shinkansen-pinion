/**
 *  @param {{ description?: string }} [elements]
 *  @returns {boolean}
 */
export default function hasDescription (elements = {}) {
  return (
    Reflect.has(elements, 'description')
  )
}
