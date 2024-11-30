/**
 * @param {
 *  PinionTypes.MetaType |
 *  PinionTypes.MetaComponentType |
 *  PinionTypes.ElementsType |
 *  PinionTypes.ElementsEnumType |
 *  PinionTypes.ElementsAnyOfType |
 *  PinionTypes.ElementsOneOfType |
 *  PinionTypes.ElementsFieldType
 * } [record]
 * @returns {boolean}
 */
export default function hasRequired (record = {}) {
  return (
    Reflect.has(record, 'isRequired')
  )
}
