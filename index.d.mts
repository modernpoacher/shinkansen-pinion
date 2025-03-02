import type { CheckboxProps } from 'shinkansen-cogs/cogs/checkbox'
import type { EmailProps } from 'shinkansen-cogs/cogs/email'
import type { NumberProps } from 'shinkansen-cogs/cogs/number'
import type { PasswordProps } from 'shinkansen-cogs/cogs/password'
import type { RadioProps } from 'shinkansen-cogs/cogs/radio'
import type { SelectProps } from 'shinkansen-cogs/cogs/select'
import type { TextProps } from 'shinkansen-cogs/cogs/text'
import type { TextareaProps } from 'shinkansen-cogs/cogs/textarea'
import type { CheckAnswersProps } from 'shinkansen-sprockets/sprockets/check-answers'
import type { ErrorSummaryProps } from 'shinkansen-sprockets/sprockets/error-summary'
import type { FieldsetProps } from 'shinkansen-sprockets/sprockets/fieldset'

declare global {
  namespace PinionTypes {
    export type ObjectLiteralType = Record<PropertyKey, never>
    export type ObjectType = Record<PropertyKey, unknown>
    export type ArrayLiteralType = never[]
    export type ArrayType = unknown[]

    export type MemberArrayType = string[] | number[] | object[] | boolean[] | null[] | never[]
    export type MemberType = string | number | object | boolean | null
    export type SelectedMemberArrayType = MemberType[]

    export interface EnumType {
      id: string
      name?: string
      items?: MemberArrayType | ArrayLiteralType
      selectedItems?: SelectedMemberArrayType | ArrayLiteralType
    }

    export interface AnyOfType {
      id: string
      name?: string
      items?: MemberArrayType
      selectedItems?: SelectedMemberArrayType
    }

    export interface OneOfType {
      id: string
      name?: string
      items?: MemberArrayType
      selectedItems?: SelectedMemberArrayType
    }

    export interface FieldType {
      id: string
      name?: string
      items?: MemberArrayType
      selectedItems?: SelectedMemberArrayType
      value?: MemberType | MemberArrayType
      defaultValue?: MemberType | MemberArrayType
    }

    export interface FieldError {
      type: string
      params: ObjectType
      uri: string
    }

    export interface MetaType {
      type: string
      uri: string
      isRequired?: boolean
      schema?: ObjectLiteralType | ObjectType
      items?: unknown[]
      selectedItems?: number[]
    }

    export interface MetaEnumType extends Omit<MetaType, 'items'> {
      items?: string[]
      selectedItems?: number[]
    }

    export interface MetaAnyOfType extends Omit<MetaType, 'items'> {
      items?: PinionType[] // eslint-disable-line no-use-before-define -- Standard type
      selectedItems?: number[]
    }

    export interface MetaOneOfType extends Omit<MetaType, 'items'> {
      items?: PinionType[] // eslint-disable-line no-use-before-define -- Standard type
      selectedItems?: number[]
    }

    export type MetaFieldType = MetaType

    export interface ElementsType {
      title: string
      description?: string
      field?: FieldType
      fields?: PinionType[] // eslint-disable-line no-use-before-define -- Standard type
    }

    export interface ElementsEnumType extends ElementsType {
      enum: EnumType
    }

    export interface ElementsAnyOfType extends ElementsType {
      anyOf: AnyOfType
    }

    export interface ElementsOneOfType extends ElementsType {
      oneOf: OneOfType
    }

    export type ElementsFieldType = ElementsType

    export interface AnswerType {
      meta: MetaType | MetaEnumType | MetaAnyOfType | MetaOneOfType
      elements: ElementsType | ElementsEnumType | ElementsAnyOfType | ElementsOneOfType
    }

    export type ResourceType = Record<PropertyKey, unknown>

    interface AnswerChangeAnswerType {
      href: string
      text: string
      visuallyHiddenText?: string
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

    export interface PinionType {
      meta: MetaType | MetaEnumType | MetaAnyOfType | MetaOneOfType
      elements: ElementsType | ElementsEnumType | ElementsAnyOfType | ElementsOneOfType
    }

    export interface ParamsType { components: Record<PropertyKey, unknown>; errors: FieldError[] }

    export interface PinionProps {
      pinion: PinionType
      params: ParamsType
      onChange: OnChangeType
    }

    export interface FieldProps {
      meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType
      elements: ElementsEnumType | ElementsAnyOfType | ElementsOneOfType | ElementsFieldType
      params: ParamsType
      onChange: OnChangeType
    }

    export interface GroupProps {
      meta: MetaEnumType | MetaAnyOfType | MetaOneOfType | MetaFieldType
      elements: ElementsEnumType | ElementsAnyOfType | ElementsOneOfType | ElementsFieldType
      params: ParamsType
      onChange: OnChangeType
    }

    export namespace Components {
      export namespace Cogs {
        export namespace Cog {
          export namespace Checkbox {
            export type {
              CheckboxProps
            }
          }

          export namespace Email {
            export type {
              EmailProps
            }
          }

          export namespace Number {
            export type {
              NumberProps
            }
          }

          export namespace Password {
            export type {
              PasswordProps
            }
          }

          export namespace Radio {
            export type {
              RadioProps
            }
          }

          export namespace Select {
            export type {
              SelectProps
            }
          }

          export namespace Text {
            export type {
              TextProps
            }
          }

          export namespace Textarea {
            export type {
              TextareaProps
            }
          }
        }
      }

      export namespace Sprockets {
        export namespace Sprocket {
          export namespace CheckAnswers {
            export type {
              CheckAnswersProps
            }
          }

          export namespace ErrorSummary {
            export type {
              ErrorSummaryProps
            }
          }

          export namespace Fieldset {
            export type {
              FieldsetProps
            }
          }
        }
      }
    }
  }
}

export {}
