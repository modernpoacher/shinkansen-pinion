/**
 * @param {PinionTypes.ElementsFieldType['field']} [field]
 * @returns {string | undefined}
 */
export default function getValue (field = {}) {
  return (
    Reflect.get(field, 'value')
  )
}
