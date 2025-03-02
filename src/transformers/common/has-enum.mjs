/**
 *  @typedef {PinionTypes.EnumType} EnumType
 *
 *  @param {{ enum?: EnumType }} [elements]
 *  @returns {elements is { enum: EnumType }}
 */
export default function hasEnum (elements) {
  if (elements) {
    return (
      'enum' in elements // Reflect.has(elements, 'enum')
    )
  }

  return false
}
