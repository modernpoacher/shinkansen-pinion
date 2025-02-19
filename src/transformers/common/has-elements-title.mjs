import hasTitle from './has-title.mjs'

/**
 *  @param {{ elements?: PinionTypes.ElementsType }} pinion
 *  @returns {boolean}
 */
export default function hasElementsTitle ({ elements }) {
  return (
    hasTitle(elements)
  )
}
