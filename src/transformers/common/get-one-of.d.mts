type OneOfType = PinionTypes.OneOfType

declare function getOneOf (elements: { oneOf: OneOfType }): OneOfType
declare function getOneOf (elements?: {
  oneOf?: OneOfType
}): OneOfType | undefined

export default getOneOf
