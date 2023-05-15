import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import ErrorSummary from 'shinkansen-pinion/components/sprockets/error-summary'

chai.use(sinonChai)

describe('shinkansen-pinion/components/sprockets/error-summary', () => {
  it('is an function', () => {
    return expect(ErrorSummary)
      .to.be.a('function')
  })
})
