declare module 'shinkansen-pinion/transformers/common/has-component' {
  export default function hasComponent (meta: PinionTypes.MetaType | PinionTypes.MetaComponentType): boolean
}

declare module 'shinkansen-pinion/transformers/common/get-component' {
  export default function getComponent (meta: PinionTypes.MetaType | PinionTypes.MetaComponentType): PinionTypes.MetaComponentType | undefined
}

declare module 'shinkansen-pinion/transformers/common/has-enum' {
  export default function hasEnum (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): boolean
}

declare module 'shinkansen-pinion/transformers/common/get-enum' {
  export default function getEnum (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): PinionTypes.ElementsEnumType | undefined
}

declare module 'shinkansen-pinion/transformers/common/has-any-of' {
  export default function hasAnyOf (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): boolean
}

declare module 'shinkansen-pinion/transformers/common/get-any-of' {
  export default function getAnyOf (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): PinionTypes.ElementsAnyOfType | undefined
}

declare module 'shinkansen-pinion/transformers/common/has-one-of' {
  export default function hasOneOf (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): boolean
}

declare module 'shinkansen-pinion/transformers/common/get-one-of' {
  export default function getOneOf (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): PinionTypes.ElementsOneOfType | undefined
}
