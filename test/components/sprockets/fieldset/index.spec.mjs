import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Fieldset from 'shinkansen-pinion/components/sprockets/fieldset'

chai.use(sinonChai)

describe('shinkansen-pinion/components/sprockets/fieldset', () => {
  it('is an function', () => {
    return expect(Fieldset)
      .to.be.a('function')
  })
})
