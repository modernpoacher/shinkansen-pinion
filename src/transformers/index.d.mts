declare module '#pinion/transformers' {
  export * as checkAnswers from '#pinion/transformers/check-answers'
  export * as common from '#pinion/transformers/common'
  export * as errorMessage from '#pinion/transformers/error-message'
}

declare module 'shinkansen-pinion/transformers' {
  export * from '#pinion/transformers'
}
