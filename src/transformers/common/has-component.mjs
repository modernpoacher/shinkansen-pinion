export default function hasComponent (meta = {}) {
  return (
    Reflect.has(meta, 'component')
  )
}
