import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Select from 'shinkansen-pinion/components/cogs/select'

use(sinonChai)

describe('shinkansen-pinion/components/cogs/select', () => {
  it('is a function', () => {
    return expect(Select)
      .to.be.a('function')
  })
})
