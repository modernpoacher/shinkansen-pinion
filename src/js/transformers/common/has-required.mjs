/**
 *  @param {{ isRequired?: boolean }} [record]
 *  @returns {record is { isRequired: boolean }}
 */
export default function hasRequired (record = {}) {
  return (
    'isRequired' in record // Reflect.has(record, 'isRequired')
  )
}
