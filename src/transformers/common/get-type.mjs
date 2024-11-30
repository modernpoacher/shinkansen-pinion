/**
 * @param {PinionTypes.MetaType | PinionTypes.MetaComponentType} [meta]
 * @returns {string | undefinfed}
 */
export default function getType (meta = {}) {
  return (
    Reflect.get(meta, 'type')
  )
}
