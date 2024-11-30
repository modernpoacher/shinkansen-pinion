export default function getComponent (meta = {}) {
  return (
    Reflect.get(meta, 'component')
  )
}
