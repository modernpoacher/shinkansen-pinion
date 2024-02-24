declare namespace PinionTypes {
  export interface FieldError {
    type: string
    params: Record<string, unknown>
    uri: string
  }

  export interface MetaType {
    items: string[]
    selectedItems: number[]
    uri: string
  }

  export type MetaComponentType = MetaType & { component: Record<string, unknown> }

  export interface ElementsType {
    title: string
    description: string
  }

  export interface EnumType { id: string, name?: string, isRequired?: boolean }
  export interface AnyOfType { id: string, name?: string, isRequired?: boolean }
  export interface OneOfType { id: string, name?: string, isRequired?: boolean }
  export interface FieldType { id: string, name?: string, isRequired?: boolean }
  export type ElementsEnumType = ElementsType & { enum: EnumType }
  export type ElementsAnyOfType = ElementsType & { anyOf: AnyOfType }
  export type ElementsOneOfType = ElementsType & { oneOf: OneOfType }
  export type ElementsFieldType = ElementsType & { field: FieldType }

  export type OnChangeType = () => void
}

declare module 'shinkansen-pinion' {
  export { default as Pinion } from 'shinkansen-pinion/pinion'
}
