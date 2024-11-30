declare module '#pinion/components/cogs' {
  export { default as CheckboxCog } from '#pinion/components/cogs/checkbox'
  export { default as EmailCog } from '#pinion/components/cogs/email'
  export { default as NumberCog } from '#pinion/components/cogs/number'
  export { default as PasswordCog } from '#pinion/components/cogs/password'
  export { default as RadioCog } from '#pinion/components/cogs/radio'
  export { default as SelectCog } from '#pinion/components/cogs/select'
  export { default as TextCog } from '#pinion/components/cogs/text'
  export { default as TextareaCog } from '#pinion/components/cogs/textarea'
}

declare module 'shinkansen-pinion/components/cogs' {
  export * from '#pinion/components/cogs'
}
