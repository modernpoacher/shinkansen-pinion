import debug from 'debug'

import hasElementsTitle from '#pinion/transformers/common/has-elements-title'
import getGroup from '#pinion/transformers/common/get-group'

import transformTypeStringAnswer from '#pinion/transformers/check-answers/transform-type-string-answer'
import transformTypeNumberAnswer from '#pinion/transformers/check-answers/transform-type-number-answer'
import transformTypeBooleanAnswer from '#pinion/transformers/check-answers/transform-type-boolean-answer'
import transformTypeNullAnswer from '#pinion/transformers/check-answers/transform-type-null-answer'

import transformTypeArrayAnswers from '#pinion/transformers/check-answers/transform-type-array-answers'
import transformTypeObjectAnswers from '#pinion/transformers/check-answers/transform-type-object-answers'

const log = debug('shinkansen-pinion/transformers/check-answers')

export {
  transformTypeStringAnswer,
  transformTypeNumberAnswer
}

/**
 *  @param {PinionTypes.AnswerType} answer
 *  @param {PinionTypes.ResourceType} resource
 *  @param {(
 *    PinionTypes.TypeStringAnswerType |
 *    PinionTypes.TypeNumberAnswerType |
 *    PinionTypes.TypeObjectAnswerType |
 *    PinionTypes.TypeArrayAnswerType |
 *    PinionTypes.TypeBooleanAnswerType |
 *    PinionTypes.TypeNullAnswerType
 *  )[]} array
 *  @param {PinionTypes.AnswerType[]} group
 *  @returns {(
 *    PinionTypes.TypeStringAnswerType |
 *    PinionTypes.TypeNumberAnswerType |
 *    PinionTypes.TypeObjectAnswerType |
 *    PinionTypes.TypeArrayAnswerType |
 *    PinionTypes.TypeBooleanAnswerType |
 *    PinionTypes.TypeNullAnswerType
 *  )[]}
 */
export function transformTypeArrayAnswer ({ elements: { fields = [] } }, resource, array = [], group = []) {
  log('transformTypeArrayAnswer')

  return fields.reduce((accumulator, answer, i, a) => {
    if (hasElementsTitle(answer)) {
      /*
       *  `answer` has a title. Put any title-less siblings into `group`
       */
      group = getGroup(i, a)

      if (group.length) {
        /*
         *  Transform `answer` and siblings
         */
        return accumulator.concat(transformTypeArrayAnswers([answer, ...group], resource))
      }
    }

    return (
      !group.includes(answer)
        ? accumulator.concat(transformAnswer(answer, resource, array, group))
        : accumulator
    )
  }, array)
}

/**
 *  @param {PinionTypes.AnswerType} answer
 *  @param {PinionTypes.ResourceType} resource
 *  @param {(
 *    PinionTypes.TypeStringAnswerType |
 *    PinionTypes.TypeNumberAnswerType |
 *    PinionTypes.TypeArrayAnswerType |
 *    PinionTypes.TypeObjectAnswerType |
 *    PinionTypes.TypeBooleanAnswerType |
 *    PinionTypes.TypeNullAnswerType
 *  )[]} array
 *  @param {PinionTypes.AnswerType[]} group
 *  @returns {(
 *    PinionTypes.TypeStringAnswerType |
 *    PinionTypes.TypeNumberAnswerType |
 *    PinionTypes.TypeArrayAnswerType |
 *    PinionTypes.TypeObjectAnswerType |
 *    PinionTypes.TypeBooleanAnswerType |
 *    PinionTypes.TypeNullAnswerType
 *  )[]}
 */
export function transformTypeObjectAnswer ({ elements: { fields = [] } }, resource, array = [], group = []) {
  log('transformTypeObjectAnswer')

  return fields.reduce((accumulator, answer, i, a) => {
    if (hasElementsTitle(answer)) {
      /*
       *  `answer` has a title. Put any title-less siblings into `group`
       */
      group = getGroup(i, a)

      if (group.length) {
        /*
         *  Transform `answer` and siblings
         */
        return accumulator.concat(transformTypeObjectAnswers([answer, ...group], resource))
      }
    }

    return (
      !group.includes(answer)
        ? accumulator.concat(transformAnswer(answer, resource, array, group))
        : accumulator
    )
  }, array)
}

export {
  transformTypeBooleanAnswer,
  transformTypeNullAnswer
}

/**
 *  @param {PinionTypes.AnswerType} answer
 *  @param {PinionTypes.ResourceType} resource
 *  @param {(
 *    PinionTypes.TypeStringAnswerType |
 *    PinionTypes.TypeNumberAnswerType |
 *    PinionTypes.TypeObjectAnswerType |
 *    PinionTypes.TypeArrayAnswerType |
 *    PinionTypes.TypeBooleanAnswerType |
 *    PinionTypes.TypeNullAnswerType
 *  )[]} array
 *  @param {PinionTypes.AnswerType[]} group
 *  @returns {(
 *    PinionTypes.TypeStringAnswerType |
 *    PinionTypes.TypeNumberAnswerType |
 *    PinionTypes.TypeObjectAnswerType |
 *    PinionTypes.TypeArrayAnswerType |
 *    PinionTypes.TypeBooleanAnswerType |
 *    PinionTypes.TypeNullAnswerType
 *  )[]}
 */
export function transformAnswer (answer, resource, array = [], group = []) {
  const {
    meta: {
      type
    } = {}
  } = answer

  switch (type) {
    case 'string':
      return (
        array.concat(transformTypeStringAnswer(answer, resource))
      )

    case 'number':
      return (
        array.concat(transformTypeNumberAnswer(answer, resource))
      )

    case 'array':
      return (
        array.concat(transformTypeArrayAnswer(answer, resource, array, group))
      )

    case 'object':
      return (
        array.concat(transformTypeObjectAnswer(answer, resource, array, group))
      )

    case 'boolean':
      return (
        array.concat(transformTypeBooleanAnswer(answer, resource))
      )

    case 'null':
      return (
        array.concat(transformTypeNullAnswer(answer, resource))
      )
  }

  return array
}
