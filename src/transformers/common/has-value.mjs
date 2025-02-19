/**
 *  @param {PinionTypes.ObjectType} [field]
 *  @returns {boolean}
 */
export default function hasValue (field = {}) {
  return (
    Reflect.has(field, 'value')
  )
}
