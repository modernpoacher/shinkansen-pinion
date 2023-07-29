import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Text from 'shinkansen-pinion/components/cogs/text'

use(sinonChai)

describe('shinkansen-pinion/components/cogs/text', () => {
  it('is an function', () => {
    return expect(Text)
      .to.be.a('function')
  })
})
