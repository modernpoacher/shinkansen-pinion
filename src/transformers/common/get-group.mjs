import hasElementsTitle from './has-elements-title.mjs'

/**
 *  @param {number} index
 *  @param {PinionTypes.AnswerType[]} array
 *  @returns {PinionTypes.AnswerType[]}
 */
export default function getGroup (index, array) {
  const group = []

  let n = index + 1
  let sibling = array[n]
  if (sibling) {
    while (!hasElementsTitle(sibling)) {
      group.push(sibling)
      n = n + 1
      sibling = array[n]
      if (!sibling) break
    }
  }

  return group
}
