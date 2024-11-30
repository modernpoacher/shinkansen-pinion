declare module '#pinion/pinion' {
  import type React from 'react'

  interface PinionType {
    meta: PinionTypes.MetaType
    elements: PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType
  }

  interface ParamsType { components: Record<PropertyKey, unknown>, errors: PinionTypes.FieldError[] }

  export interface FieldProps {
    meta: PinionTypes.MetaType
    elements: PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType
    params: ParamsType
    onChange: PinionTypes.OnChangeType
  }

  export interface GroupProps {
    meta: PinionTypes.MetaType
    elements: PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType
    params: ParamsType
    onChange: PinionTypes.OnChangeType
  }

  export interface PinionProps {
    pinion: PinionType
    params: ParamsType
    onChange: PinionTypes.OnChangeType
  }

  export function renderToRadiosForEnum (meta: PinionTypes.MetaType, elements: PinionTypes.ElementsEnumType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToRadiosForAnyOf (meta: PinionTypes.MetaType, elements: PinionTypes.ElementsAnyOfType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToRadiosForOneOf (meta: PinionTypes.MetaType, elements: PinionTypes.ElementsOneOfType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToSelectForEnum (meta: PinionTypes.MetaType, elements: PinionTypes.ElementsEnumType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToSelectForAnyOf (meta: PinionTypes.MetaType, elements: PinionTypes.ElementsAnyOfType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToSelectForOneOf (meta: PinionTypes.MetaType, elements: PinionTypes.ElementsOneOfType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function renderToField (meta: PinionTypes.MetaType, elements: PinionTypes.ElementsFieldType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element
  export function Field (props: FieldProps): React.JSX.Element
  export function Group (props: GroupProps): React.JSX.Element
  export function renderField (pinion: PinionType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element | null
  export function renderGroup (pinion: PinionType, params: ParamsType, onChange: PinionTypes.OnChangeType): React.JSX.Element | null
  export default function Pinion (props: PinionProps): React.JSX.Element
}

declare module 'shinkansen-pinion/pinion' {
  export * from '#pinion/pinion'
}
