import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import * as common from 'shinkansen-pinion/transformers/common'

use(sinonChai)

describe('shinkansen-pinion/transformers/common', () => {
  it('is a module', () => {
    return expect(common)
      .to.be.a('module')
  })
})
