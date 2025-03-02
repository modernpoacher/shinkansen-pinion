/**
 *  @param {{ type?: string }} [meta]
 *  @returns {meta is { type: string }}
 */
export default function hasType (meta) {
  if (meta) {
    return (
      'type' in meta // Reflect.has(meta, 'type')
    )
  }

  return false
}
