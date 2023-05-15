import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Select from 'shinkansen-pinion/components/cogs/select'

chai.use(sinonChai)

describe('shinkansen-pinion/components/cogs/select', () => {
  it('is an function', () => {
    return expect(Select)
      .to.be.a('function')
  })
})
