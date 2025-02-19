import type React from 'react'

type PinionType = PinionTypes.PinionType
type ParamsType = PinionTypes.ParamsType

type MetaType = PinionTypes.MetaType
type MetaEnumType = PinionTypes.MetaEnumType
type MetaAnyOfType = PinionTypes.MetaAnyOfType
type MetaOneOfType = PinionTypes.MetaOneOfType
type MetaFieldType = PinionTypes.MetaFieldType

type ElementsEnumType = PinionTypes.ElementsEnumType
type ElementsAnyOfType = PinionTypes.ElementsAnyOfType
type ElementsOneOfType = PinionTypes.ElementsOneOfType
type ElementsFieldType = PinionTypes.ElementsFieldType

type OnChangeType = PinionTypes.OnChangeType

type FieldProps = PinionTypes.FieldProps
type GroupProps = PinionTypes.GroupProps

type PinionProps = PinionTypes.PinionProps

export function renderToRadiosForEnum (meta: MetaEnumType, elements:ElementsEnumType, params: ParamsType, onChange: OnChangeType): React.JSX.Element
export function renderToRadiosForAnyOf (meta: MetaAnyOfType, elements: ElementsAnyOfType, params: ParamsType, onChange: OnChangeType): React.JSX.Element
export function renderToRadiosForOneOf (meta: MetaOneOfType, elements: ElementsOneOfType, params: ParamsType, onChange: OnChangeType): React.JSX.Element
export function renderToSelectForEnum (meta: MetaEnumType, elements: ElementsEnumType, params: ParamsType, onChange: OnChangeType): React.JSX.Element
export function renderToSelectForAnyOf (meta: MetaAnyOfType, elements: ElementsAnyOfType, params: ParamsType, onChange: OnChangeType): React.JSX.Element
export function renderToSelectForOneOf (meta: MetaOneOfType, elements: ElementsOneOfType, params: ParamsType, onChange: OnChangeType): React.JSX.Element
export function renderToField (meta: MetaFieldType, elements: ElementsFieldType, params: ParamsType, onChange: OnChangeType): React.JSX.Element
export function Field (props: FieldProps): React.JSX.Element
export function Group (props: GroupProps): React.JSX.Element
export function renderField (pinion: PinionType, params: ParamsType, onChange: OnChangeType): React.JSX.Element | null
export function renderGroup (pinion: PinionType, params: ParamsType, onChange: OnChangeType): React.JSX.Element | null
export default function Pinion (props: PinionProps): React.JSX.Element
