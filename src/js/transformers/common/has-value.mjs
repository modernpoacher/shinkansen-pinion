/**
 *  @typedef {PinionTypes.MemberType} MemberType
 *  @typedef {PinionTypes.MemberArrayType} MemberArrayType
 *
 *  @param {{ value?: MemberType | MemberArrayType }} [field]
 *  @returns {field is { value: MemberType | MemberArrayType }}
 */
export default function hasValue (field = {}) {
  return (
    'value' in field // Reflect.has(field, 'value')
  )
}
