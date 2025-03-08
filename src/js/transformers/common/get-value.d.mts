declare function getValue (field: { value: string }): string
declare function getValue (field?: {
  value?: string
}): string | undefined

export default getValue
