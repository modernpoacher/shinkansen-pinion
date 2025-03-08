type FieldType = PinionTypes.FieldType

declare function getField (elements: { field: FieldType }): FieldType
declare function getField (elements?: {
  field?: FieldType
}): FieldType | undefined

export default getField
