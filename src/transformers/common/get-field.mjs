/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {PinionTypes.FieldType | undefined}
 */
export default function getField (elements) {
  if (elements) {
    return (
      Reflect.get(elements, 'field')
    )
  }
}
