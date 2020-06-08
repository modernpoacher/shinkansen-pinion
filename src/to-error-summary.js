import React from 'react'
import debug from 'debug'

import ErrorSummary from './components/error-summary'

const log = debug('shinkansen:pinion:to-error-summary')

log('`pinion` is awake')

export ErrorSummary from './components/error-summary'

export default function toErrorSummary (description = 'There is a problem', definitions = []) {
  log('toErrorSummary')

  return (
    <ErrorSummary
      title={description}
      errorSummary={definitions}
    />
  )
}
