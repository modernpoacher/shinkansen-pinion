import debug from 'debug'

import hasTitle from '#pinion/transformers/common/has-title'
import getTitle from '#pinion/transformers/common/get-title'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 *  @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType} [elements]
 *  @returns {string | null | undefined}
 */
export default function transformAnswerTitle (elements) {
  log('transformAnswerTitle')

  if (hasTitle(elements)) {
    const title = getTitle(elements)

    return (
      title // string | undefined
    )
  }

  return null
}
