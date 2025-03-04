import {
  expect
} from 'chai'

import {
  hasEnum,
  hasAnyOf,
  hasOneOf,
  hasField,
  getSchema
} from '#pinion/common/meta'

describe('#pinion/common/meta', () => {
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

  describe('`getSchema`', () => {
    it('is a function', () => {
      expect(getSchema)
        .to.be.a('function')
    })
  })
})
