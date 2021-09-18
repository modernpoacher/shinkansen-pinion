import debug from 'debug'

import hasElementsTitle from 'shinkansen-pinion/transformers/common/has-elements-title'
import getGroup from 'shinkansen-pinion/transformers/common/get-group'

import transformTypeStringAnswer from './transform-type-string-answer'
import transformTypeNumberAnswer from './transform-type-number-answer'
import transformTypeBooleanAnswer from './transform-type-boolean-answer'
import transformTypeNullAnswer from './transform-type-null-answer'

import transformTypeObjectAnswers from './transform-type-object-answers'
import transformTypeArrayAnswers from './transform-type-array-answers'

const log = debug('shinkansen-pinion:transformers:check-answers')

export function transformTypeObjectAnswer ({ elements: { fields = [] } = {} }, resource, array = [], group = []) {
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

export function transformTypeArrayAnswer ({ elements: { fields = [] } = {} }, resource, array = [], group = []) {
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

export default function transformAnswer (answer, resource, array = [], group = []) {
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

    case 'object':
      return (
        array.concat(transformTypeObjectAnswer(answer, resource, array, group))
      )

    case 'array':
      return (
        array.concat(transformTypeArrayAnswer(answer, resource, array, group))
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

  return null
}
