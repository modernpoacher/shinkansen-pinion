import {
  expect
} from 'chai'

import {
  hasError,
  getError
} from '#pinion/transformers/error-message'

describe('#pinion/transformers/error-message', () => {
  describe('`hasError`', () => {
    it('is a function', () => {
      expect(hasError)
        .to.be.a('function')
    })
  })

  describe('`getError`', () => {
    it('is a function', () => {
      expect(getError)
        .to.be.a('function')
    })
  })
})
