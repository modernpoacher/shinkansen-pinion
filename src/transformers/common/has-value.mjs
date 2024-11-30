export default function hasValue (field = {}) {
  return (
    Reflect.has(field, 'value')
  )
}
