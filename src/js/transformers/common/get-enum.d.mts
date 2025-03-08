type EnumType = PinionTypes.EnumType

declare function getEnum (elements: { enum: EnumType }): EnumType
declare function getEnum (elements?: {
  enum?: EnumType
}): EnumType | undefined

export default getEnum
