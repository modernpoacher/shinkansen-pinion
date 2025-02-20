type ObjectType = PinionTypes.ObjectType

type MetaType = PinionTypes.MetaType
type MetaEnumType = PinionTypes.MetaEnumType
type MetaAnyOfType = PinionTypes.MetaAnyOfType
type MetaOneOfType = PinionTypes.MetaOneOfType
type MetaFieldType = PinionTypes.MetaFieldType

declare function getSchema (meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType): ObjectType
declare function getSchema (meta: MetaType): ObjectType

export default getSchema
