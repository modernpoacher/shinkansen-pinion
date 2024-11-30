export default function hasType (meta = {}) {
  return (
    Reflect.has(meta, 'type')
  )
}
