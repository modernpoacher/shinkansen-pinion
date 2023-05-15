import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Text from 'shinkansen-pinion/components/cogs/text'

chai.use(sinonChai)

describe('shinkansen-pinion/components/cogs/text', () => {
  it('is an function', () => {
    return expect(Text)
      .to.be.a('function')
  })
})
