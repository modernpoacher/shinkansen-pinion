import getTitle from './get-title.mjs'

/**
 *  @param {{ elements?: PinionTypes.ElementsType }} pinion
 *  @returns {string | undefined}
 */
export default function getElementsTitle ({ elements }) {
  return (
    getTitle(elements)
  )
}
