type MetaType = PinionTypes.MetaType
type MetaEnumType = PinionTypes.MetaEnumType
type MetaAnyOfType = PinionTypes.MetaAnyOfType
type MetaOneOfType = PinionTypes.MetaOneOfType
type MetaFieldType = PinionTypes.MetaFieldType

declare function hasOneOf (meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType): boolean
declare function hasOneOf (meta: MetaType): boolean

export default hasOneOf
