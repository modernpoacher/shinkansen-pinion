declare function getTitle (elements: { title: string }): string
declare function getTitle (elements?: {
  title?: string
}): string | undefined

export default getTitle
