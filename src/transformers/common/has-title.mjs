export default function hasTtile (elements = {}) {
  return (
    Reflect.has(elements, 'title')
  )
}
