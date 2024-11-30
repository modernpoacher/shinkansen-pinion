export default function getField (elements = {}) {
  return (
    Reflect.get(elements, 'field')
  )
}
