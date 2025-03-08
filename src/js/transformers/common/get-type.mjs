/**
 *  @overload
 *  @param {{ type: string }} meta
 *  @returns {string}
 *
 *  @param {{ type?: string }} [meta]
 *  @returns {string | undefined}
 */
export default function getType (meta) {
  if (meta) {
    return (
      meta.type // Reflect.get(meta, 'type')
    )
  }
}
