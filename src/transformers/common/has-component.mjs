/**
 *  @param {PinionTypes.MetaType} [meta]
 *  @returns {boolean}
 */
export default function hasComponent (meta) {
  if (meta) {
    return (
      Reflect.has(meta, 'component')
    )
  }

  return false
}
