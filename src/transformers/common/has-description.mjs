/**
 *  @param {{ description?: string }} [elements]
 *  @returns {boolean}
 */
export default function hasDescription (elements = {}) {
  return (
    'description' in elements
  )
}
