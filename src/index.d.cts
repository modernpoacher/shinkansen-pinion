declare namespace PinionTypes {
  export type FieldError = {
    type: string
    params: {}
    uri: string
  }

  export type MetaType = {
    items: string[],
    selectedItems: number[],
    uri: string
  }

  export type MetaComponentType = MetaType & { component: {} }

  export type ElementsType = {
    title: string,
    description: string
  }

  export type EnumType = { id: string, name?: string, isRequired?: boolean }
  export type AnyOfType = { id: string, name?: string, isRequired?: boolean }
  export type OneOfType = { id: string, name?: string, isRequired?: boolean }
  export type FieldType = { id: string, name?: string, isRequired?: boolean }
  export type ElementsEnumType = ElementsType & { enum: EnumType }
  export type ElementsAnyOfType = ElementsType & { anyOf: AnyOfType }
  export type ElementsOneOfType = ElementsType & { oneOf: OneOfType }
  export type ElementsFieldType = ElementsType & { field: FieldType }

  export type OnChangeType = () => void
}

declare module 'shinkansen-pinion/components/check-answers' {
  import React from 'react'
  import type { SprocketProps } from 'shinkansen-sprockets/sprockets'

  export default function CheckAnswersSprocket(props: SprocketProps): React.JSX.Element
}

declare module 'shinkansen-pinion/components/error-summary' {
  import React from 'react'
  import type { SprocketProps } from 'shinkansen-sprockets/sprockets'

  export default function ErrorSummarySprocket(props: SprocketProps): React.JSX.Element
}

declare module 'shinkansen-pinion/components/fieldset' {
  import React from 'react'
  import type { SprocketProps } from 'shinkansen-sprockets/sprockets'

  export default function FieldsetSprocket(props: SprocketProps): React.JSX.Element
}

declare module 'shinkansen-pinion/transformers/common/has-component' {
  export default function hasComponent (meta: PinionTypes.MetaType | PinionTypes.MetaComponentType): boolean
}

declare module 'shinkansen-pinion/transformers/common/get-component' {
  export default function getComponent (meta: PinionTypes.MetaType | PinionTypes.MetaComponentType): PinionTypes.MetaComponentType | void
}

declare module 'shinkansen-pinion/transformers/common/has-enum' {
  export default function hasEnum (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): boolean
}

declare module 'shinkansen-pinion/transformers/common/get-enum' {
  export default function getEnum (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): PinionTypes.ElementsEnumType | void
}

declare module 'shinkansen-pinion/transformers/common/has-any-of' {
  export default function hasAnyOf (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): boolean
}

declare module 'shinkansen-pinion/transformers/common/get-any-of' {
  export default function getAnyOf (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): PinionTypes.ElementsAnyOfType | void
}

declare module 'shinkansen-pinion/transformers/common/has-one-of' {
  export default function hasOneOf (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): boolean
}

declare module 'shinkansen-pinion/transformers/common/get-one-of' {
  export default function getOneOf (elements: (PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType)): PinionTypes.ElementsOneOfType | void
}

declare module 'shinkansen-pinion/transformers/error-message' {
  export function hasError (errors: PinionTypes.FieldError[], uri: string | null): boolean
  export function getError (errors: PinionTypes.FieldError[], uri: string | null): PinionTypes.FieldError | null
}

declare module 'shinkansen-pinion/pinion' {
  import React from 'react'

  type PinionType = {
    meta: PinionTypes.MetaType,
    elements: PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType
  }
  type ParamsType = {components: {}, errors: PinionTypes.FieldError[]}

  export type FieldProps = {
    meta: PinionTypes.MetaType,
    elements: PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType
    params: ParamsType
    onChange: PinionTypes.OnChangeType
  }

  export type GroupProps = {
    meta: PinionTypes.MetaType,
    elements: PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType
    params: ParamsType
    onChange: PinionTypes.OnChangeType
  }

  export type PinionProps = {
    pinion: PinionType
    params: ParamsType
    onChange: PinionTypes.OnChangeType
  }

  export function renderToRadiosForEnum(meta: PinionTypes.MetaType, elements: PinionTypes.ElementsEnumType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToRadiosForAnyOf(meta: PinionTypes.MetaType, elements: PinionTypes.ElementsAnyOfType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToRadiosForOneOf(meta: PinionTypes.MetaType, elements: PinionTypes.ElementsOneOfType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToSelectForEnum(meta: PinionTypes.MetaType, elements: PinionTypes.ElementsEnumType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToSelectForAnyOf(meta: PinionTypes.MetaType, elements: PinionTypes.ElementsAnyOfType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToSelectForOneOf(meta: PinionTypes.MetaType, elements: PinionTypes.ElementsOneOfType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToField(meta: PinionTypes.MetaType, elements: PinionTypes.ElementsFieldType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function Field(props: FieldProps): React.JSX.Element
  export function Group(props: GroupProps): React.JSX.Element
  export function renderField (pinion: PinionType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element | null
  export function renderGroup (pinion: PinionType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element | null
  export default function Pinion(props: PinionProps): React.JSX.Element
}

declare module 'shinkansen-pinion' {
  export { default as Pinion } from 'shinkansen-pinion/pinion'
}
