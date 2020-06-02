import React from 'react'
import debug from 'debug'

import toZashiki from 'shinkansen-transmission/lib/transmission/to-zashiki'
import fromDocumentToHash from 'shinkansen-transmission/lib/transmission/from-document-to-hash'

import {
  CheckAnswersSprocket
} from 'shinkansen-sprockets'

import transform from './transformers/check-answers'

const log = debug('shinkansen:pinion:to-check-answers')

log('`pinion` is awake')

export default function toCheckAnswers (description, definition = {}, response, resource = {}) {
  log('toCheckAnswers')

  return (
    <CheckAnswersSprocket
      title={description}
      checkAnswers={transform(toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}), resource)}
    />
  )
}
