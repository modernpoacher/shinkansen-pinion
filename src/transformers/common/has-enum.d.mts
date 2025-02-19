type ElementsType = PinionTypes.ElementsType
type ElementsEnumType = PinionTypes.ElementsEnumType
type ElementsAnyOfType = PinionTypes.ElementsAnyOfType
type ElementsOneOfType = PinionTypes.ElementsOneOfType
type ElementsFieldType = PinionTypes.ElementsFieldType

export default function hasEnum (elements?: ElementsType | ElementsEnumType | ElementsAnyOfType | ElementsOneOfType): elements is ElementsEnumType
