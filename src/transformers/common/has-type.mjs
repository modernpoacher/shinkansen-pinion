/**
 * @param {PinionTypes.MetaType | PinionTypes.MetaComponentType} [meta]
 * @returns {boolean}
 */
export default function hasType (meta = {}) {
  return (
    Reflect.has(meta, 'type')
  )
}
