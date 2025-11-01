type ElementsType = PinionTypes.ElementsType
type ElementsEnumType = PinionTypes.ElementsEnumType
type ElementsAnyOfType = PinionTypes.ElementsAnyOfType
type ElementsOneOfType = PinionTypes.ElementsOneOfType
type ElementsFieldType = PinionTypes.ElementsFieldType

declare function hasAnyOf (elements: ElementsEnumType | ElementsAnyOfType | ElementsOneOfType | ElementsFieldType): elements is ElementsAnyOfType
declare function hasAnyOf (elements: ElementsType): elements is ElementsAnyOfType

export default hasAnyOf
