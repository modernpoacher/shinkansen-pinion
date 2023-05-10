import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import * as common from 'shinkansen-pinion/transformers/common'

chai.use(sinonChai)

describe('shinkansen-pinion/transformers/common', () => {
  it('is a module', () => {
    return expect(common)
      .to.be.a('module')
  })
})
