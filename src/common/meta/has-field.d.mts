type MetaType = PinionTypes.MetaType
type MetaEnumType = PinionTypes.MetaEnumType
type MetaAnyOfType = PinionTypes.MetaAnyOfType
type MetaOneOfType = PinionTypes.MetaOneOfType
type MetaFieldType = PinionTypes.MetaFieldType

declare function hasField (meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType): boolean
declare function hasField (meta: MetaType): boolean

export default hasField
