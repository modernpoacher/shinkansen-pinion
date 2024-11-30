export default function getType (meta = {}) {
  return (
    Reflect.get(meta, 'type')
  )
}
