/**
 *  @param {PinionTypes.MetaType} [meta]
 *  @returns {string | undefined}
 */
export default function getType (meta) {
  if (meta) {
    return (
      Reflect.get(meta, 'type')
    )
  }
}
