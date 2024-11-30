export default function getDescription (elements = {}) {
  return (
    Reflect.get(elements, 'description')
  )
}
