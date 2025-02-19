/**
 *  @param {{ isRequired?: boolean }} [record]
 *  @returns {boolean}
 */
export default function hasRequired (record = {}) {
  return (
    Reflect.has(record, 'isRequired')
  )
}
