/**
 * @param {PinionTypes.MetaType | PinionTypes.MetaComponentType} [meta]
 * @returns {PinionTypes.MetaComponentType['component'] | undefined}
 */
export default function getComponent (meta = {}) {
  return (
    Reflect.get(meta, 'component')
  )
}
