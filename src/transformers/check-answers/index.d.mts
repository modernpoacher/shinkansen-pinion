type AnswerType = PinionTypes.AnswerType
type ResourceType = PinionTypes.ResourceType
type ArrayType = PinionTypes.ArrayType
type GroupType = PinionTypes.GroupProps

type TypeStringAnswerType = PinionTypes.TypeStringAnswerType
type TypeNumberAnswerType = PinionTypes.TypeNumberAnswerType
type TypeArrayAnswerType = PinionTypes.TypeArrayAnswerType
type TypeObjectAnswerType = PinionTypes.TypeObjectAnswerType
type TypeBooleanAnswerType = PinionTypes.TypeBooleanAnswerType
type TypeNullAnswerType = PinionTypes.TypeNullAnswerType

export default function transformTypeObjectAnswer (
  answer: AnswerType,
  resource: ResourceType,
  array: ArrayType,
  group: GroupType
): TypeObjectAnswerType[]

export default function transformTypeArrayAnswer (
  answer: AnswerType,
  resource: ResourceType,
  array: ArrayType,
  group: GroupType
): TypeArrayAnswerType[]

export default function transformAnswer (
  answer: AnswerType,
  resource: ResourceType,
  array: ArrayType,
  group: GroupType
): (
    TypeStringAnswerType[] |
    TypeNumberAnswerType[] |
   TypeArrayAnswerType[] |
    TypeObjectAnswerType[] |
    TypeBooleanAnswerType[] |
    TypeNullAnswerType[]
)
