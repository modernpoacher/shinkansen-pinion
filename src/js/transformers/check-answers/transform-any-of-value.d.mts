type MemberArrayType = PinionTypes.MemberArrayType
type SelectedMemberArrayType = PinionTypes.SelectedMemberArrayType

export default function transformAnyOfValue (field?: { items?: MemberArrayType; selectedItems?: SelectedMemberArrayType }): string
