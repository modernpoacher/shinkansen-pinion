/**
 *  @param {PinionTypes.MetaType} [meta]
 *  @returns {boolean}
 */
export default function hasComponent (meta) {
  if (meta) {
    return (
      'component' in meta
    )
  }

  return false
}
