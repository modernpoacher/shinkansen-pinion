import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Radio from 'shinkansen-pinion/components/cogs/radio'

use(sinonChai)

describe('shinkansen-pinion/components/cogs/radio', () => {
  it('is a function', () => {
    return expect(Radio)
      .to.be.a('function')
  })
})
