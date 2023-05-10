import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Pinion from 'shinkansen-pinion/pinion'

chai.use(sinonChai)

describe('shinkansen-pinion/pinion', () => {
  describe('`Pinion`', () => {
    it('is a function', () => {
      return expect(Pinion)
        .to.be.a('function')
    })
  })
})
