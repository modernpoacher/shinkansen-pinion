/**
 *  @param {PinionTypes.MetaType} [meta]
 *  @returns {boolean}
 */
export default function hasType (meta) {
  if (meta) {
    return (
      Reflect.has(meta, 'type')
    )
  }

  return false
}
