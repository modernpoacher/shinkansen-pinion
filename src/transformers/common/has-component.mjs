/**
 * @param {PinionTypes.MetaType | PinionTypes.MetaComponentType} [meta]
 * @returns {boolean}
 */
export default function hasComponent (meta = {}) {
  return (
    Reflect.has(meta, 'component')
  )
}
