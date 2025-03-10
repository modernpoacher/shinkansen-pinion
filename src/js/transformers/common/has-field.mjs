/**
 *  @typedef {PinionTypes.FieldType} FieldType
 *
 *  @param {{ field?: FieldType }} [elements]
 *  @returns {elements is { field: FieldType }}
 */
export default function hasField (elements) {
  if (elements) {
    return (
      'field' in elements
    )
  }

  return false
}
