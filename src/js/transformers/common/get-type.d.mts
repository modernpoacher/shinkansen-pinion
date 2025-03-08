declare function getType (meta: { type: string }): string
declare function getType (meta?: {
  type?: string
}): string | undefined

export default getType
