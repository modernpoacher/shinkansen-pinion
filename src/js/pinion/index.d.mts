declare module '#pinion/pinion' {
  import type React from 'react'

  export type PinionType = PinionTypes.PinionType
  export type ParamsType = PinionTypes.ParamsType

  export type MetaType = PinionTypes.MetaType
  export type MetaEnumType = PinionTypes.MetaEnumType
  export type MetaAnyOfType = PinionTypes.MetaAnyOfType
  export type MetaOneOfType = PinionTypes.MetaOneOfType
  export type MetaFieldType = PinionTypes.MetaFieldType

  export type ElementsEnumType = PinionTypes.ElementsEnumType
  export type ElementsAnyOfType = PinionTypes.ElementsAnyOfType
  export type ElementsOneOfType = PinionTypes.ElementsOneOfType
  export type ElementsFieldType = PinionTypes.ElementsFieldType

  export type OnEventType = PinionTypes.OnEventType

  export type FieldProps = PinionTypes.FieldProps
  export type GroupProps = PinionTypes.GroupProps

  export type PinionProps = PinionTypes.PinionProps

  export function renderToRadiosForEnum (meta: MetaEnumType, elements:ElementsEnumType, params: ParamsType, onChange: OnEventType): React.JSX.Element
  export function renderToRadiosForAnyOf (meta: MetaAnyOfType, elements: ElementsAnyOfType, params: ParamsType, onChange: OnEventType): React.JSX.Element
  export function renderToRadiosForOneOf (meta: MetaOneOfType, elements: ElementsOneOfType, params: ParamsType, onChange: OnEventType): React.JSX.Element
  export function renderToSelectForEnum (meta: MetaEnumType, elements: ElementsEnumType, params: ParamsType, onChange: OnEventType): React.JSX.Element
  export function renderToSelectForAnyOf (meta: MetaAnyOfType, elements: ElementsAnyOfType, params: ParamsType, onChange: OnEventType): React.JSX.Element
  export function renderToSelectForOneOf (meta: MetaOneOfType, elements: ElementsOneOfType, params: ParamsType, onChange: OnEventType): React.JSX.Element
  export function renderToField (meta: MetaFieldType, elements: ElementsFieldType, params: ParamsType, onChange: OnEventType): React.JSX.Element
  export function Field (props: FieldProps): React.JSX.Element
  export function Group (props: GroupProps): React.JSX.Element
  export function renderField (pinion: PinionType, params: ParamsType, onChange: OnEventType): React.JSX.Element | null
  export function renderGroup (pinion: PinionType, params: ParamsType, onChange: OnEventType): React.JSX.Element | null
  export default function Pinion (props: PinionProps): React.JSX.Element
}

declare module 'shinkansen-pinion/pinion' {
  export { default } from '#pinion/pinion'
  export * from '#pinion/pinion'
}
