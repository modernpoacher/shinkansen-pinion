declare function getRequired (record: { isRequired: boolean }): boolean
declare function getRequired (record?: {
  isRequired?: boolean
}): boolean | undefined

export default getRequired
