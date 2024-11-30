export default function getOneOf (elements = {}) {
  return (
    Reflect.get(elements, 'oneOf')
  )
}
