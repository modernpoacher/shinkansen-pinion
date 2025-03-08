/**
 *  @param {PinionTypes.MetaType} [meta]
 *  @returns {PinionTypes.ObjectType | undefined}
 */
export default function getComponent (meta) {
  if (meta) {
    return (
      Reflect.get(meta, 'component')
    )
  }
}
