import debug from 'debug'

import getResourceUrl from '#pinion/transformers/common/get-resource-url'
import getVisuallyHiddenText from './get-visually-hidden-text.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

export default function getChangeAnswer (answer, resource) {
  log('getChangeAnswer')

  return {
    href: getResourceUrl(resource),
    text: 'Change',
    visuallyHiddenText: getVisuallyHiddenText(answer)
  }
}
