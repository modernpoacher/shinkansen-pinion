export default function hasAnyOf (elements = {}) {
  return (
    Reflect.has(elements, 'anyOf')
  )
}
