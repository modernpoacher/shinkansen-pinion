export default function getEnum (elements = {}) {
  return (
    Reflect.get(elements, 'enum')
  )
}
