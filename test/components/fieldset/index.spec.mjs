import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Fieldset from 'shinkansen-pinion/components/fieldset'

chai.use(sinonChai)

describe('shinkansen-pinion/components/fieldset', () => {
  it('is an function', () => {
    return expect(Fieldset)
      .to.be.a('function')
  })
})
