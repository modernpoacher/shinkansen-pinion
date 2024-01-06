import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Pinion from 'shinkansen-pinion/pinion'

use(sinonChai)

describe('shinkansen-pinion/pinion', () => {
  describe('`Pinion`', () => {
    it('is a function', () => {
      return expect(Pinion)
        .to.be.a('function')
    })
  })
})
