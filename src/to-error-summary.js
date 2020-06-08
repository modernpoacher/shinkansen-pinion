import React from 'react'
import debug from 'debug'

import {
  ErrorSummarySprocket
} from 'shinkansen-sprockets'

const log = debug('shinkansen:pinion:to-error-summary')

log('`pinion` is awake')

export {
  ErrorSummarySprocket as ErrorSummary
}

export default function toErrorSummary (description = 'There is a problem', definitions = []) {
  log('toErrorSummary')

  return (
    <ErrorSummarySprocket
      title={description}
      errorSummary={definitions}
    />
  )
}
