import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import CheckAnswers from 'shinkansen-pinion/components/check-answers'

chai.use(sinonChai)

describe('shinkansen-pinion/components/check-answers', () => {
  it('is an function', () => {
    return expect(CheckAnswers)
      .to.be.a('function')
  })
})
