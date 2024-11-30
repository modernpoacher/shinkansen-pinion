export default function hasEnum (elements = {}) {
  return (
    Reflect.has(elements, 'enum')
  )
}
