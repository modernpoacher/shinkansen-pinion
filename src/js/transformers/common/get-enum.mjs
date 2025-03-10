/**
 *  @typedef {PinionTypes.EnumType} EnumType
 *
 *  @overload
 *  @param {{ enum: EnumType }} elements
 *  @returns {EnumType}
 *
 *  @param {{ enum?: EnumType }} [elements]
 *  @returns {EnumType | undefined}
 */
export default function getEnum (elements) {
  if (elements) {
    return (
      elements.enum
    )
  }
}
