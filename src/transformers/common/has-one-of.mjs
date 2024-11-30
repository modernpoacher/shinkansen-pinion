export default function hasOneOf (elements = {}) {
  return (
    Reflect.has(elements, 'oneOf')
  )
}
