import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import * as errorMessage from 'shinkansen-pinion/transformers/error-message'

chai.use(sinonChai)

describe('shinkansen-pinion/transformers/error-message', () => {
  it('is a module', () => {
    return expect(errorMessage)
      .to.be.a('module')
  })
})
