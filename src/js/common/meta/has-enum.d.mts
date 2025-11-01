type MetaType = PinionTypes.MetaType
type MetaEnumType = PinionTypes.MetaEnumType
type MetaAnyOfType = PinionTypes.MetaAnyOfType
type MetaOneOfType = PinionTypes.MetaOneOfType
type MetaFieldType = PinionTypes.MetaFieldType

declare function hasEnum (meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType): meta is MetaEnumType
declare function hasEnum (meta: MetaType): meta is MetaEnumType

export default hasEnum
