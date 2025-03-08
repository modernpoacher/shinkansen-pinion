type OneOfType = PinionTypes.OneOfType

export default function hasOneOf (elements?: { oneOf?: OneOfType }): elements is { oneOf: OneOfType }
