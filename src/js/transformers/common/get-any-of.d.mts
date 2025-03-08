type AnyOfType = PinionTypes.AnyOfType

declare function getAnyOf (elements: { anyOf: AnyOfType }): AnyOfType
declare function getAnyOf (elements?: {
  anyOf?: AnyOfType
}): AnyOfType | undefined

export default getAnyOf
