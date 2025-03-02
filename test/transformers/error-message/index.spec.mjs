import {
  expect
} from 'chai'

import * as errorMessage from 'shinkansen-pinion/transformers/error-message'

describe('shinkansen-pinion/transformers/error-message', () => {
  it('is a module', () => {
    expect(errorMessage)
      .to.be.a('module')
  })
})
