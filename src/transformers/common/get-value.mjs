export default function getValue (field = {}) {
  return (
    Reflect.get(field, 'value')
  )
}
