// @ts-nocheck

/**
 *  @typedef {PinionTypes.MemberType} MemberType
 *  @typedef {PinionTypes.MemberArrayType} MemberArrayType
 *
 *  @overload
 *  @param {{ value: MemberType | MemberArrayType }} field
 *  @returns {string | undefined}
 *
 *  @param {{ value?: MemberType | MemberArrayType }} [field]
 *  @returns {string | undefined}
 */
export default function getValue (field = {}) {
  return (
    field.value
  )
}
