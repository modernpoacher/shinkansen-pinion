export default function getAnyOf (elements = {}) {
  return (
    Reflect.get(elements, 'anyOf')
  )
}
