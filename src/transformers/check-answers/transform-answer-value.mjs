import debug from 'debug'

import hasEnum from '#pinion/transformers/common/has-enum'
import getEnum from '#pinion/transformers/common/get-enum'
import hasOneOf from '#pinion/transformers/common/has-one-of'
import getOneOf from '#pinion/transformers/common/get-one-of'
import hasAnyOf from '#pinion/transformers/common/has-any-of'
import getAnyOf from '#pinion/transformers/common/get-any-of'
import hasField from '#pinion/transformers/common/has-field'
import getField from '#pinion/transformers/common/get-field'

import transformEnumValue from '#pinion/transformers/check-answers/transform-enum-value'
import transformAnyOfValue from '#pinion/transformers/check-answers/transform-any-of-value'
import transformOneOfValue from '#pinion/transformers/check-answers/transform-one-of-value'
import transformFieldValue from '#pinion/transformers/check-answers/transform-field-value'

const log = debug('shinkansen-pinion/transformers/check-answers')

/**
 *  @overload
 *  @param {{ enum?: PinionTypes.EnumType }} elements
 *  @returns {string | null}
 *
 *  @overload
 *  @param {{ anyOf?: PinionTypes.AnyOfType }} elements
 *  @returns {string | null}
 *
 *  @overload
 *  @param {{ oneOf?: PinionTypes.OneOfType }} elements
 *  @returns {string | null}
 *
 *  @overload
 *  @param {{ field?: PinionTypes.FieldType }} elements
 *  @returns {string | null}
 *
 *  @param {Record<string, unknown>} [elements]
 *  @returns {string | null | undefined}
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
