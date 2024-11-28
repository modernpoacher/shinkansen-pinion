declare module '#pinion/common' {
  export function DEFAULT_HANDLE_CHANGE (): void

  export function DEFAULT_HANDLE_CLICK (): void
}

declare module 'shinkansen-pinion/common' {
  export * from '#pinion/common'
}
