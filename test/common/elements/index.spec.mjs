import {
  expect
} from 'chai'

import {
  hasEnum,
  hasAnyOf,
  hasOneOf,
  hasField
} from '#pinion/common/elements'

describe('#pinion/common/elements', () => {
  describe('`hasEnum`', () => {
    it('is a function', () => {
      expect(hasEnum)
        .to.be.a('function')
    })
  })

  describe('`hasAnyOf`', () => {
    it('is a function', () => {
      expect(hasAnyOf)
        .to.be.a('function')
    })
  })

  describe('`hasOneOf`', () => {
    it('is a function', () => {
      expect(hasOneOf)
        .to.be.a('function')
    })
  })

  describe('`hasField`', () => {
    it('is a function', () => {
      expect(hasField)
        .to.be.a('function')
    })
  })
})
