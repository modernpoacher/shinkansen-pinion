export default function hasRequired (elements = {}) {
  return (
    Reflect.has(elements, 'required')
  )
}
