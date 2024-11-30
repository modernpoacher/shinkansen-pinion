export default function getRequired (elements = {}) {
  return (
    Reflect.get(elements, 'required')
  )
}
