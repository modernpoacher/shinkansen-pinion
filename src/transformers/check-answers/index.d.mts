declare module '#pinion/transformers/check-answers/get-answer-title' {
  export default function getAnswerTitle (answer: PinionTypes.AnswerType): string | null
}

declare module '#pinion/transformers/check-answers/get-answer-value-for-type-array' {
  type GroupType = PinionTypes.ArrayType[] | PinionTypes.ArrayLiteralType[]

  export default function getAnswerValueForTypeArray (group: GroupType): Array<string | null>
}

declare module '#pinion/transformers/check-answers/get-answer-value-for-type-object' {
  type GroupType = PinionTypes.ArrayType[] | PinionTypes.ArrayLiteralType[]

  export default function getAnswerValueForTypeObject (group: GroupType): Array<string | null>
}

declare module '#pinion/transformers/check-answers/get-answer-value' {
  export default function getAnswerValue (answer: PinionTypes.AnswerType): string | null
}

declare module '#pinion/transformers/check-answers/get-any-of-selected-item-value' {
  type ItemsType = PinionTypes.MetaType['items']
  type SelectedItemsType = PinionTypes.MetaType['selectedItems']

  export default function getAnyOfSelectedItemValue (items: ItemsType, selectedItems: SelectedItemsType): string
}

declare module '#pinion/transformers/check-answers/get-any-of-selected-items-value' {
  type ItemsType = PinionTypes.MetaType['items']
  type SelectedItemsType = PinionTypes.MetaType['selectedItems']

  export default function getAnyOfSelectedItemsValue (items: ItemsType, selectedItems: SelectedItemsType): string
}

declare module '#pinion/transformers/check-answers/get-change-answer' {
  export default function getChangeAnswer (answer: PinionTypes.AnswerType, resource: PinionTypes.ResourceType): PinionTypes.AnswerChangeAnswerType
}

declare module '#pinion/transformers/check-answers/get-enum-selected-item-value' {
  type ItemsType = PinionTypes.MetaType['items']
  type SelectedItemsType = PinionTypes.MetaType['selectedItems']

  export default function getEnumSelectedItemValue (items: ItemsType, selectedItems: SelectedItemsType): string
}

declare module '#pinion/transformers/check-answers/get-enums-selected-item-value' {
  type ItemsType = PinionTypes.MetaType['items']
  type SelectedItemsType = PinionTypes.MetaType['selectedItems']

  export default function getEnumSelectedItemsValue (items: ItemsType, selectedItems: SelectedItemsType): string
}

declare module '#pinion/transformers/check-answers/get-one-of-selected-item-value' {
  type ItemsType = PinionTypes.MetaType['items']
  type SelectedItemsType = PinionTypes.MetaType['selectedItems']

  export default function getOneOfSelectedItemValue (items: ItemsType, selectedItems: SelectedItemsType): string
}

declare module '#pinion/transformers/check-answers/get-one-of-selected-items-value' {
  type ItemsType = PinionTypes.MetaType['items']
  type SelectedItemsType = PinionTypes.MetaType['selectedItems']

  export default function getOneOfSelectedItemsValue (items: ItemsType, selectedItems: SelectedItemsType): string
}

declare module '#pinion/transformers/check-answers/get-visually-hidden-text' {
  export default function getVisuallyHiddenText (answer: PinionTypes.AnswerType): string
}

declare module '#pinion/transformers/check-answers/to-answer-value' {
  export default function toAnswerValue (answer: PinionTypes.AnswerType): string | null
}

declare module '#pinion/transformers/check-answers/transform-answer-title' {
  export default function transformAnswerTitle (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): string | null
}

declare module '#pinion/transformers/check-answers/transform-answer-value' {
  export default function transformAnswerValue (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): string | null
}

declare module '#pinion/transformers/check-answers/transform-any-of-value' {
  export default function transformAnyOfValue (meta: PinionTypes.MetaType | PinionTypes.MetaComponentType): string
}

declare module '#pinion/transformers/check-answers/transform-enum-value' {
  export default function transformEnumValue (meta: PinionTypes.MetaType | PinionTypes.MetaComponentType): string
}

declare module '#pinion/transformers/check-answers/transform-field-value' {
  export default function transformFieldValue (field: PinionTypes.FieldType): string
}

declare module '#pinion/transformers/check-answers/transform-one-of-value' {
  export default function transformOneOfValue (meta: PinionTypes.MetaType | PinionTypes.MetaComponentType): string
}

declare module '#pinion/transformers/check-answers/transform-type-array-answers' {
  export default function transformTypeArrayAnswers (answers: PinionTypes.AnswerType[], resource: PinionTypes.ResourceType): PinionTypes.TypeArrayAnswerType
}

declare module '#pinion/transformers/check-answers/transform-type-boolean-answer' {
  export default function transformTypeBooleanAnswer (answer: PinionTypes.AnswerType, resource: PinionTypes.ResourceType): PinionTypes.TypeBooleanAnswerType
}

declare module '#pinion/transformers/check-answers/transform-type-null-answer' {
  export default function transformTypeNullAnswer (answer: PinionTypes.AnswerType, resource: PinionTypes.ResourceType): PinionTypes.TypeNullAnswerType
}

declare module '#pinion/transformers/check-answers/transform-type-number-answer' {
  export default function transformTypeNumberAnswer (answer: PinionTypes.AnswerType, resource: PinionTypes.ResourceType): PinionTypes.TypeNumberAnswerType
}

declare module '#pinion/transformers/check-answers/transform-type-object-answers' {
  export default function transformTypeObjectAnswers (answers: PinionTypes.AnswerType[], resource: PinionTypes.ResourceType): PinionTypes.TypeObjectAnswerType
}

declare module '#pinion/transformers/check-answers/transform-type-string-answer' {
  export default function transformTypeStringAnswer (answer: PinionTypes.AnswerType, resource: PinionTypes.ResourceType): PinionTypes.TypeStringAnswerType
}

declare module 'shinkansen-pinion/transformers/check-answers/get-answer-title' {
  export { default } from '#pinion/transformers/check-answers/get-answer-title'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-answer-value-for-type-array' {
  export { default } from '#pinion/transformers/check-answers/get-answer-value-for-type-array'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-answer-value-for-type-object' {
  export { default } from '#pinion/transformers/check-answers/get-answer-value-for-type-object'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-answer-value' {
  export { default } from '#pinion/transformers/check-answers/get-answer-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-any-of-selected-item-value' {
  export { default } from '#pinion/transformers/check-answers/get-any-of-selected-item-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-any-of-selected-items-value' {
  export { default } from '#pinion/transformers/check-answers/get-any-of-selected-items-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-change-answer' {
  export { default } from '#pinion/transformers/check-answers/get-change-answer'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-enum-selected-item-value' {
  export { default } from '#pinion/transformers/check-answers/get-enum-selected-item-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-enums-selected-item-value' {
  export { default } from '#pinion/transformers/check-answers/get-enums-selected-item-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-one-of-selected-item-value' {
  export { default } from '#pinion/transformers/check-answers/get-one-of-selected-item-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-one-of-selected-items-value' {
  export { default } from '#pinion/transformers/check-answers/get-one-of-selected-items-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/get-visually-hidden-text' {
  export { default } from '#pinion/transformers/check-answers/get-visually-hidden-text'
}

declare module 'shinkansen-pinion/transformers/check-answers/to-answer-value' {
  export { default } from '#pinion/transformers/check-answers/to-answer-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-answer-title' {
  export { default } from '#pinion/transformers/check-answers/transform-answer-title'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-answer-value' {
  export { default } from '#pinion/transformers/check-answers/transform-answer-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-any-of-value' {
  export { default } from '#pinion/transformers/check-answers/transform-any-of-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-enum-value' {
  export { default } from '#pinion/transformers/check-answers/transform-enum-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-field-value' {
  export { default } from '#pinion/transformers/check-answers/transform-field-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-one-of-value' {
  export { default } from '#pinion/transformers/check-answers/transform-one-of-value'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-type-array-answers' {
  export { default } from '#pinion/transformers/check-answers/transform-type-array-answers'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-type-boolean-answer' {
  export { default } from '#pinion/transformers/check-answers/transform-type-boolean-answer'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-type-null-answer' {
  export { default } from '#pinion/transformers/check-answers/transform-type-null-answer'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-type-number-answer' {
  export { default } from '#pinion/transformers/check-answers/transform-type-number-answer'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-type-object-answers' {
  export { default } from '#pinion/transformers/check-answers/transform-type-object-answers'
}

declare module 'shinkansen-pinion/transformers/check-answers/transform-type-string-answer' {
  export { default } from '#pinion/transformers/check-answers/transform-type-string-answer'
}

declare module '#pinion/transformers/check-answers' {
  type AnswerType = PinionTypes.AnswerType
  type ResourceType = PinionTypes.ResourceType
  type ArrayType = PinionTypes.ArrayType[] | PinionTypes.ArrayLiteralType[]
  type GroupType = PinionTypes.ArrayType[] | PinionTypes.ArrayLiteralType[]

  export function transformTypeObjectAnswer (
    answer: AnswerType,
    resource: ResourceType,
    array: ArrayType,
    group: GroupType
  ): PinionTypes.TypeObjectAnswerType[]

  export function transformTypeArrayAnswer (
    answer: AnswerType,
    resource: ResourceType,
    array: ArrayType,
    group: GroupType
  ): PinionTypes.TypeArrayAnswerType[]

  export default function transformAnswer (
    answer: AnswerType,
    resource: ResourceType,
    array: ArrayType,
    group: GroupType
  ): (
    PinionTypes.TypeStringAnswerType[] |
    PinionTypes.TypeNumberAnswerType[] |
    PinionTypes.TypeArrayAnswerType[] |
    PinionTypes.TypeObjectAnswerType[] |
    PinionTypes.TypeBooleanAnswerType[] |
    PinionTypes.TypeNullAnswerType[]
  )
}

declare module 'shinkansen-pinion/transformers/check-answers' {
  export { default } from '#pinion/transformers/check-answers'
  export * from '#pinion/transformers/check-answers'
}
