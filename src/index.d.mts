declare module '#pinion' {
  export * as components from '#pinion/components'
  export * as transformers from '#pinion/transformers'
  export { default as Pinion } from '#pinion/pinion'
}

declare module 'shinkansen-pinion' {
  export * from '#pinion'
}
