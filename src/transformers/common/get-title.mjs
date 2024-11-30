export default function getTitle (elements = {}) {
  return (
    Reflect.get(elements, 'title')
  )
}
