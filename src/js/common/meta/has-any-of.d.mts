type MetaType = PinionTypes.MetaType
type MetaEnumType = PinionTypes.MetaEnumType
type MetaAnyOfType = PinionTypes.MetaAnyOfType
type MetaOneOfType = PinionTypes.MetaOneOfType
type MetaFieldType = PinionTypes.MetaFieldType

declare function hasAnyOf (meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType): meta is MetaAnyOfType
declare function hasAnyOf (meta: MetaType): meta is MetaAnyOfType

export default hasAnyOf
