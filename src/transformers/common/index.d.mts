declare module '#pinion/transformers/common/has-component' {
  export default function hasComponent (meta: PinionTypes.MetaType | PinionTypes.MetaComponentType): boolean
}

declare module '#pinion/transformers/common/get-component' {
  export default function getComponent (meta: PinionTypes.MetaType | PinionTypes.MetaComponentType): PinionTypes.MetaComponentType | undefined
}

declare module '#pinion/transformers/common/has-description' {
  export default function hasDescription (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): boolean
}

declare module '#pinion/transformers/common/get-description' {
  export default function getDescription (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): string | undefined
}

declare module '#pinion/transformers/common/has-title' {
  export default function hasTitle (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): boolean
}

declare module '#pinion/transformers/common/get-title' {
  export default function getTitle (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): string | undefined
}

declare module '#pinion/transformers/common/has-enum' {
  export default function hasEnum (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): boolean
}

declare module '#pinion/transformers/common/get-enum' {
  export default function getEnum (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): PinionTypes.ElementsEnumType | undefined
}

declare module '#pinion/transformers/common/has-any-of' {
  export default function hasAnyOf (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): boolean
}

declare module '#pinion/transformers/common/get-any-of' {
  export default function getAnyOf (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): PinionTypes.ElementsAnyOfType | undefined
}

declare module '#pinion/transformers/common/has-one-of' {
  export default function hasOneOf (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): boolean
}

declare module '#pinion/transformers/common/get-one-of' {
  export default function getOneOf (elements: PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType): PinionTypes.ElementsOneOfType | undefined
}

declare module 'shinkansen-pinion/transformers/common/has-component' {
  export { default } from '#pinion/transformers/common/has-component'
}

declare module 'shinkansen-pinion/transformers/common/get-component' {
  export { default } from '#pinion/transformers/common/get-component'
}

declare module 'shinkansen-pinion/transformers/common/has-enum' {
  export { default } from '#pinion/transformers/common/has-enum'
}

declare module 'shinkansen-pinion/transformers/common/get-enum' {
  export { default } from '#pinion/transformers/common/get-enum'
}

declare module 'shinkansen-pinion/transformers/common/has-any-of' {
  export { default } from '#pinion/transformers/common/has-any-of'
}

declare module 'shinkansen-pinion/transformers/common/get-any-of' {
  export { default } from '#pinion/transformers/common/get-any-of'
}

declare module 'shinkansen-pinion/transformers/common/has-one-of' {
  export { default } from '#pinion/transformers/common/has-one-of'
}

declare module 'shinkansen-pinion/transformers/common/get-one-of' {
  export { default } from '#pinion/transformers/common/get-one-of'
}

declare module '#pinion/transformers/common' {
  export { default as getAnyOf } from '#pinion/transformers/common/get-any-of'
  export { default as getComponent } from '#pinion/transformers/common/get-component'
  export { default as getDescription } from '#pinion/transformers/common/get-description'
  export { default as getElementsTitle } from '#pinion/transformers/common/get-elements-title'
  export { default as getEnum } from '#pinion/transformers/common/get-enum'
  export { default as getField } from '#pinion/transformers/common/get-field'
  export { default as getGroup } from '#pinion/transformers/common/get-group'
  export { default as getOneOf } from '#pinion/transformers/common/get-one-of'
  export { default as getRequired } from '#pinion/transformers/common/get-required'
  export { default as getResourceUrl } from '#pinion/transformers/common/get-resource-url'
  export { default as getTitle } from '#pinion/transformers/common/get-title'
  export { default as getType } from '#pinion/transformers/common/get-type'
  export { default as getValue } from '#pinion/transformers/common/get-value'
  export { default as hasAnyOf } from '#pinion/transformers/common/has-any-of'
  export { default as hasComponent } from '#pinion/transformers/common/has-component'
  export { default as hasDescription } from '#pinion/transformers/common/has-description'
  export { default as hasElementsTitle } from '#pinion/transformers/common/has-elements-title'
  export { default as hasEnum } from '#pinion/transformers/common/has-enum'
  export { default as hasField } from '#pinion/transformers/common/has-field'
  export { default as hasOneOf } from '#pinion/transformers/common/has-one-of'
  export { default as hasRequired } from '#pinion/transformers/common/has-required'
  export { default as hasTitle } from '#pinion/transformers/common/has-title'
  export { default as hasType } from '#pinion/transformers/common/has-type'
  export { default as hasValue } from '#pinion/transformers/common/has-value'
}

declare module 'shinkansen-pinion/transformers/common' {
  export * from '#pinion/transformers/common'
}
