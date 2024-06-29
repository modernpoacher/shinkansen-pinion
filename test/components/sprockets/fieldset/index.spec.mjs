import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Fieldset from 'shinkansen-pinion/components/sprockets/fieldset'

use(sinonChai)

describe('shinkansen-pinion/components/sprockets/fieldset', () => {
  it('is a function', () => {
    return expect(Fieldset)
      .to.be.a('function')
  })
})
