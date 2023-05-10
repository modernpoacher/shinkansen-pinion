import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import ErrorSummary from 'shinkansen-pinion/components/error-summary'

chai.use(sinonChai)

describe('shinkansen-pinion/components/error-summary', () => {
  it('is an function', () => {
    return expect(ErrorSummary)
      .to.be.a('function')
  })
})
