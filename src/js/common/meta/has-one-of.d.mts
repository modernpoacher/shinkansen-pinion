type MetaType = PinionTypes.MetaType
type MetaEnumType = PinionTypes.MetaEnumType
type MetaAnyOfType = PinionTypes.MetaAnyOfType
type MetaOneOfType = PinionTypes.MetaOneOfType
type MetaFieldType = PinionTypes.MetaFieldType

declare function hasOneOf (meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType): meta is MetaOneOfType
declare function hasOneOf (meta: MetaType): meta is MetaOneOfType

export default hasOneOf
