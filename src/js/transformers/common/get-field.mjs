/**
 *  @typedef {PinionTypes.FieldType} FieldType
 *
 *  @overload
 *  @param {{ field: FieldType }} elements
 *  @returns {FieldType}
 *
 *  @param {{ field?: FieldType }} [elements]
 *  @returns {FieldType | undefined}
 */
export default function getField (elements) {
  if (elements) {
    return (
      elements.field
    )
  }
}
