/**
 *
declare namespace Zashiki {
  export type ObjectLiteralType = Record<PropertyKey, never>
  export type ObjectType = Record<PropertyKey, unknown>
  export type ArrayLiteralType = never[]
  export type ArrayType = unknown[]

  export interface SchemaType {
    type: string
    title?: string
    description?: string
    readOnly?: boolean
    writeOnly?: boolean
    const?: unknown
    default?: unknown
    enum?: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType
    anyOf?: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType
    oneOf?: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType
    allOf: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType
    minimum?: number
    maximum?: number
    minLength?: number
    maxLength?: number
    minItems?: number
    maxItems?: number
    hasUniqueItems?: boolean
    minContains?: number
    maxContains?: number
    minProperties?: number
    maxProperties?: number
    isExclusiveMin?: boolean
    isExclusiveMax?: boolean
    multipleOf?: number
  }

  export type DocumentType = string | number | boolean | null | ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType | ObjectLiteralType | undefined
  export type HashType = Record<PropertyKey, string> | Record<PropertyKey, never>

  export interface ZashikiType {
    meta: ObjectType | ObjectLiteralType
    elements: ObjectType | ObjectLiteralType
  }
}
 *
 */

declare namespace PinionTypes {
  export type ObjectLiteralType = Record<PropertyKey, never>
  export type ObjectType = Record<PropertyKey, unknown>
  export type ArrayLiteralType = never[]
  export type ArrayType = unknown[]

  export interface FieldError {
    type: string
    params: ObjectType
    uri: string
  }

  export interface MetaType {
    items: string[] | ArrayLiteralType
    selectedItems: number[] | ArrayLiteralType
    uri: string
  }

  export type MetaComponentType = MetaType & { component: ObjectType }

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

  export interface AnswerType {
    meta: MetaType | MetaComponentType
    elements: ElementsType | ElementsEnumType | ElementsAnyOfType | ElementsOneOfType | ElementsFieldType
  }

  export type ResourceType = Record<PropertyKey, unknown>

  interface AnswerChangeAnswerType {
    href: string
    text: string
    visuallyHiddenText: string
  }

  export interface TypeStringAnswerType {
    type: 'STRING'
    params: {
      answer: {
        title: string
        value: string
      }
      changeAnswer: AnswerChangeAnswerType
    }
  }

  export interface TypeNumberAnswerType {
    type: 'NUMBER'
    params: {
      answer: {
        title: string
        value: string
      }
      changeAnswer: AnswerChangeAnswerType
    }
  }

  export interface TypeArrayAnswerType {
    type: 'ARRAY'
    params: {
      answer: {
        title: string
        value: string[]
      }
      changeAnswer: AnswerChangeAnswerType
    }
  }

  export interface TypeObjectAnswerType {
    type: 'OBJECT'
    params: {
      answer: {
        title: string
        value: string[]
      }
      changeAnswer: AnswerChangeAnswerType
    }
  }

  export interface TypeBooleanAnswerType {
    type: 'BOOLEAN'
    params: {
      answer: {
        title: string
        value: string
      }
      changeAnswer: AnswerChangeAnswerType
    }
  }

  export interface TypeNullAnswerType {
    type: 'NULL'
    params: {
      answer: {
        title: string
        value: string
      }
      changeAnswer: AnswerChangeAnswerType
    }
  }

  export type OnChangeType = () => void
}

declare module '#pinion' {
  export * as components from '#pinion/components'
  export * as transformers from '#pinion/transformers'
  export { default as Pinion } from '#pinion/pinion'
}

declare module 'shinkansen-pinion' {
  export * from '#pinion'
}
