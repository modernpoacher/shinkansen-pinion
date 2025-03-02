type AnyOfType = PinionTypes.AnyOfType

export default function hasAnyOf (elements?: { anyOf?: AnyOfType }): elements is { anyOf: AnyOfType }
