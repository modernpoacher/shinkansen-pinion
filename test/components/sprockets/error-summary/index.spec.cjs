const {
  expect // @ts-ignore
} = require('chai')

const ErrorSummary = require('#pinion/components/sprockets/error-summary')

describe('#pinion/components/sprockets/error-summary', () => {
  it('is a function', () => {
    expect(ErrorSummary)
      .to.be.a('function')
  })
})
