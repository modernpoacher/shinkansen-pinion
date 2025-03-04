import debug from 'debug'

import hasTitle from '#pinion/transformers/common/has-title'
import getTitle from '#pinion/transformers/common/get-title'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 *  @param {{ elements?: PinionTypes.ElementsType }} [answer]
 *  @returns {string}
 */
export default function getVisuallyHiddenText ({ elements } = {}) {
  log('getVisuallyHiddenText')

  if (hasTitle(elements)) {
    const title = getTitle(elements) ?? ''

    return (
      title.toLowerCase()
    )
  }

  return ''
}
