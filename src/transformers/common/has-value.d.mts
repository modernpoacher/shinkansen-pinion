type MemberType = PinionTypes.MemberType
type MemberArrayType = PinionTypes.MemberArrayType

declare function hasValue (field: { value: MemberType | MemberArrayType }): field is { value: MemberType | MemberArrayType }
declare function hasValue (field?: { value?: MemberType | MemberArrayType }): field is { value: MemberType | MemberArrayType }

export default hasValue
