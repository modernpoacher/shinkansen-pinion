import React from 'react'
import debug from 'debug'

import toZashiki from 'shinkansen-transmission/lib/transmission/to-zashiki'
import fromDocumentToHash from 'shinkansen-transmission/lib/transmission/from-document-to-hash'

import CheckAnswers from './components/check-answers'

import transform from './transformers/check-answers'

const log = debug('shinkansen:pinion:to-check-answers')

log('`pinion` is awake')

export CheckAnswers from './components/check-answers'

export default function toCheckAnswers (description, definition = {}, response, resource = {}) {
  log('toCheckAnswers')

  return (
    <CheckAnswers
      title={description}
      checkAnswers={transform(toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}), resource)}
    />
  )
}
