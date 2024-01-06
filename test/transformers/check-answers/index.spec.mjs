import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import * as checkAnswers from 'shinkansen-pinion/transformers/check-answers'

use(sinonChai)

describe('shinkansen-pinion/transformers/check-answers', () => {
  it('is a module', () => {
    return expect(checkAnswers)
      .to.be.a('module')
  })
})
