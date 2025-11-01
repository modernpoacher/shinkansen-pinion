type ElementsType = PinionTypes.ElementsType
type ElementsEnumType = PinionTypes.ElementsEnumType
type ElementsAnyOfType = PinionTypes.ElementsAnyOfType
type ElementsOneOfType = PinionTypes.ElementsOneOfType
type ElementsFieldType = PinionTypes.ElementsFieldType

declare function hasEnum (elements: ElementsEnumType | ElementsAnyOfType | ElementsOneOfType | ElementsFieldType): elements is ElementsEnumType
declare function hasEnum (elements: ElementsType): elements is ElementsEnumType

export default hasEnum
