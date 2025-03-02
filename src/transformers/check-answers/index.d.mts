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

export { default as transformTypeStringAnswer } from '#pinion/transformers/check-answers/transform-type-string-answer'

export { default as transformTypeNumberAnswer } from '#pinion/transformers/check-answers/transform-type-number-answer'

export function transformTypeObjectAnswer (
  answer: AnswerType,
  resource: ResourceType,
  array: ArrayType,
  group: GroupType
): TypeObjectAnswerType[]

export function transformTypeArrayAnswer (
  answer: AnswerType,
  resource: ResourceType,
  array: ArrayType,
  group: GroupType
): TypeArrayAnswerType[]

export { default as transformTypeBooleanAnswer } from '#pinion/transformers/check-answers/transform-type-boolean-answer'

export { default as transformTypeNullAnswer } from '#pinion/transformers/check-answers/transform-type-null-answer'

export function transformAnswer (
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
