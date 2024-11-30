export default function hasDescription (elements = {}) {
  return (
    Reflect.has(elements, 'description')
  )
}
