declare module 'shinkansen-pinion/transformers/error-message' {
  export function hasError (errors: PinionTypes.FieldError[], uri: string | null): boolean
  export function getError (errors: PinionTypes.FieldError[], uri: string | null): PinionTypes.FieldError | null
}
