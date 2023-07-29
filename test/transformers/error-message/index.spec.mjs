import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import * as errorMessage from 'shinkansen-pinion/transformers/error-message'

use(sinonChai)

describe('shinkansen-pinion/transformers/error-message', () => {
  it('is a module', () => {
    return expect(errorMessage)
      .to.be.a('module')
  })
})
