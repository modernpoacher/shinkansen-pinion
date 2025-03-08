type EnumType = PinionTypes.EnumType

declare function hasEnum (elements?: { enum?: EnumType }): elements is { enum: EnumType }

export default hasEnum
