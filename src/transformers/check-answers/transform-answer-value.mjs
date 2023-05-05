import debug from 'debug'

import hasEnum from 'shinkansen-pinion/transformers/common/has-enum'
import getEnum from 'shinkansen-pinion/transformers/common/get-enum'
import hasOneOf from 'shinkansen-pinion/transformers/common/has-one-of'
import getOneOf from 'shinkansen-pinion/transformers/common/get-one-of'
import hasAnyOf from 'shinkansen-pinion/transformers/common/has-any-of'
import getAnyOf from 'shinkansen-pinion/transformers/common/get-any-of'
import hasField from 'shinkansen-pinion/transformers/common/has-field'
import getField from 'shinkansen-pinion/transformers/common/get-field'

import transformEnumValue from './transform-enum-value.mjs'
import transformAnyOfValue from './transform-any-of-value.mjs'
import transformOneOfValue from './transform-one-of-value.mjs'
import transformFieldValue from './transform-field-value.mjs'

const log = debug('shinkansen-pinion/transformers/check-answers')

export default function transformAnswerValue (elements) {
  log('transformAnswerValue')

  if (hasEnum(elements)) {
    const field = getEnum(elements)

    return transformEnumValue(field)
  } else {
    if (hasAnyOf(elements)) {
      const field = getAnyOf(elements)

      return transformAnyOfValue(field)
    } else {
      if (hasOneOf(elements)) {
        const field = getOneOf(elements)

        return transformOneOfValue(field)
      } else {
        if (hasField(elements)) {
          const field = getField(elements)

          return transformFieldValue(field)
        }
      }
    }
  }

  return null
}
