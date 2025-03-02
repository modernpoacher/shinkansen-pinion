declare function getDescription (elements: { description: string }): string
declare function getDescription (elements?: {
  description?: string
}): string | undefined

export default getDescription
