export default function hasField (elements = {}) {
  return (
    Reflect.has(elements, 'field')
  )
}
