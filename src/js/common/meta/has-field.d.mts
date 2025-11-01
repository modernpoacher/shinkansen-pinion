type MetaType = PinionTypes.MetaType
type MetaEnumType = PinionTypes.MetaEnumType
type MetaAnyOfType = PinionTypes.MetaAnyOfType
type MetaOneOfType = PinionTypes.MetaOneOfType
type MetaFieldType = PinionTypes.MetaFieldType

declare function hasField (meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType): meta is MetaFieldType
declare function hasField (meta: MetaType): meta is MetaFieldType

export default hasField
