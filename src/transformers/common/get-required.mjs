/**
 *  @overload
 *  @param {{ isRequired: boolean }} record
 *  @returns {boolean}
 *
 *  @param {{ isRequired?: boolean }} [record]
 *  @returns {boolean | undefined}
 */
export default function getRequired (record = {}) {
  return (
    record.isRequired // Reflect.get(record, 'isRequired')
  )
}
