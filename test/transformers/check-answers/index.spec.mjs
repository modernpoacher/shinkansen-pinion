import {
  expect
} from 'chai'

import * as checkAnswers from 'shinkansen-pinion/transformers/check-answers'

describe('shinkansen-pinion/transformers/check-answers', () => {
  it('is a module', () => {
    expect(checkAnswers)
      .to.be.a('module')
  })
})
