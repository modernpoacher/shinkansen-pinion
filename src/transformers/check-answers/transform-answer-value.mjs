import debug from 'debug'

import hasEnum from '#pinion/transformers/common/has-enum'
import getEnum from '#pinion/transformers/common/get-enum'
import hasOneOf from '#pinion/transformers/common/has-one-of'
import getOneOf from '#pinion/transformers/common/get-one-of'
import hasAnyOf from '#pinion/transformers/common/has-any-of'
import getAnyOf from '#pinion/transformers/common/get-any-of'
import hasField from '#pinion/transformers/common/has-field'
import getField from '#pinion/transformers/common/get-field'

import transformEnumValue from './transform-enum-value.mjs'
import transformAnyOfValue from './transform-any-of-value.mjs'
import transformOneOfValue from './transform-one-of-value.mjs'
import transformFieldValue from './transform-field-value.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 * @param {PinionTypes.ElementsType | PinionTypes.ElementsEnumType | PinionTypes.ElementsAnyOfType | PinionTypes.ElementsOneOfType | PinionTypes.ElementsFieldType} elements
 * @returns {string | null}
 */
export default function transformAnswerValue (elements) {
  log('transformAnswerValue')

  if (hasEnum(elements)) {
    const field = getEnum(elements)

    return transformEnumValue(field) // : string
  } else {
    if (hasAnyOf(elements)) {
      const field = getAnyOf(elements)

      return transformAnyOfValue(field) // : string
    } else {
      if (hasOneOf(elements)) {
        const field = getOneOf(elements)

        return transformOneOfValue(field) // : string
      } else {
        if (hasField(elements)) {
          const field = getField(elements)

          return transformFieldValue(field) // : string
        }
      }
    }
  }

  return null
}
