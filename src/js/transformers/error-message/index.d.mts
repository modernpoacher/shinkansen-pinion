export function hasError (errors?: PinionTypes.FieldError[] | PinionTypes.ArrayLiteralType, uri?: string | null): boolean
export function getError (errors?: PinionTypes.FieldError[] | PinionTypes.ArrayLiteralType, uri?: string | null): PinionTypes.FieldError | undefined

export * from '#pinion/transformers/error-message'
