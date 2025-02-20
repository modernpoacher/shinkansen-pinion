type ElementsType = PinionTypes.ElementsType
type ElementsEnumType = PinionTypes.ElementsEnumType
type ElementsAnyOfType = PinionTypes.ElementsAnyOfType
type ElementsOneOfType = PinionTypes.ElementsOneOfType
type ElementsFieldType = PinionTypes.ElementsFieldType

declare function hasField (elements: ElementsEnumType | ElementsAnyOfType | ElementsOneOfType | ElementsFieldType): boolean
declare function hasField (elements: ElementsType): boolean

export default hasField
