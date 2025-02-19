/**
 *  @param {{ isRequired?: boolean }} [record]
 *  @returns {boolean | undefined}
 */
export default function getRequired (record = {}) {
  return (
    Reflect.get(record, 'isRequired')
  )
}
