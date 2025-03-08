type ElementsType = PinionTypes.ElementsType
type ElementsEnumType = PinionTypes.ElementsEnumType
type ElementsAnyOfType = PinionTypes.ElementsAnyOfType
type ElementsOneOfType = PinionTypes.ElementsOneOfType
type ElementsFieldType = PinionTypes.ElementsFieldType

declare function hasOneOf (elements: ElementsEnumType | ElementsAnyOfType | ElementsOneOfType | ElementsFieldType): boolean
declare function hasOneOf (elements: ElementsType): boolean

export default hasOneOf
