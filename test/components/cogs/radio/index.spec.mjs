import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Radio from 'shinkansen-pinion/components/cogs/radio'

use(sinonChai)

describe('shinkansen-pinion/components/cogs/radio', () => {
  it('is an function', () => {
    return expect(Radio)
      .to.be.a('function')
  })
})
