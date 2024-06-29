import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import ErrorSummary from 'shinkansen-pinion/components/sprockets/error-summary'

use(sinonChai)

describe('shinkansen-pinion/components/sprockets/error-summary', () => {
  it('is a function', () => {
    return expect(ErrorSummary)
      .to.be.a('function')
  })
})
