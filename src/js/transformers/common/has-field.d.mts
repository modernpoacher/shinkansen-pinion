type FieldType = PinionTypes.FieldType

export default function hasField (elements?: { field?: FieldType }): elements is { field: FieldType }
