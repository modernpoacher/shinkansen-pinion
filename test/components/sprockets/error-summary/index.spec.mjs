import {
  expect
} from 'chai'

import ErrorSummary from 'shinkansen-pinion/components/sprockets/error-summary'

describe('shinkansen-pinion/components/sprockets/error-summary', () => {
  it('is a function', () => {
    return expect(ErrorSummary)
      .to.be.a('function')
  })
})
