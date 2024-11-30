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
 * @returns {boolean | undefined}
 */
export default function getRequired (record = {}) {
  return (
    Reflect.get(record, 'isRequired')
  )
}
