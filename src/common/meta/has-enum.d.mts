type MetaType = PinionTypes.MetaType
type MetaEnumType = PinionTypes.MetaEnumType
type MetaAnyOfType = PinionTypes.MetaAnyOfType
type MetaOneOfType = PinionTypes.MetaOneOfType
type MetaFieldType = PinionTypes.MetaFieldType

declare function hasEnum (meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType): boolean
declare function hasEnum (meta: MetaType): boolean

export default hasEnum
