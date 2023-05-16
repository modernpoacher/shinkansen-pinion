import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import CheckAnswers from 'shinkansen-pinion/components/sprockets/check-answers'

chai.use(sinonChai)

describe('shinkansen-pinion/components/sprockets/check-answers', () => {
  it('is an function', () => {
    return expect(CheckAnswers)
      .to.be.a('function')
  })
})