/**
 *  @param {PinionTypes.ElementsType} [elements]
 *  @returns {PinionTypes.EnumType | undefined}
 */
export default function getEnum (elements) {
  if (elements) {
    return (
      Reflect.get(elements, 'enum')
    )
  }
}
