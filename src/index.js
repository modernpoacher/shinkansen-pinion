import React from 'react'
import debug from 'debug'

import toZashiki from 'shinkansen-transmission/lib/transmission/to-zashiki'
import fromDocumentToHash from 'shinkansen-transmission/lib/transmission/from-document-to-hash'

import Pinion from './components/pinion'

const log = debug('shinkansen:pinion')

log('`pinion` is awake')

export Pinion from './components/pinion'

export default function toPinion (definition = {}, response, components = {}, errors = [], onChange) {
  log('toPinion')

  return (
    <Pinion
      pinion={toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}, components)}
      params={{ components, errors }}
      onChange={onChange}
    />
  )
}
