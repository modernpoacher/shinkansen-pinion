import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import CheckAnswers from 'shinkansen-pinion/components/sprockets/check-answers'

use(sinonChai)

describe('shinkansen-pinion/components/sprockets/check-answers', () => {
  it('is an function', () => {
    return expect(CheckAnswers)
      .to.be.a('function')
  })
})
