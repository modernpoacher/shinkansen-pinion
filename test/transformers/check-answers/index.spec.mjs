import {
  expect
} from 'chai'

import {
  transformTypeStringAnswer,
  transformTypeNumberAnswer,
  transformTypeArrayAnswer,
  transformTypeObjectAnswer,
  transformTypeBooleanAnswer,
  transformTypeNullAnswer,
  transformAnswer
} from '#pinion/transformers/check-answers'

describe('#pinion/transformers/check-answers', () => {
  describe('transformTypeStringAnswer', () => {
    it('is a function', () => {
      expect(transformTypeStringAnswer)
        .to.be.a('function')
    })
  })

  describe('transformTypeNumberAnswer', () => {
    it('is a function', () => {
      expect(transformTypeNumberAnswer)
        .to.be.a('function')
    })
  })

  describe('transformTypeArrayAnswer', () => {
    it('is a function', () => {
      expect(transformTypeArrayAnswer)
        .to.be.a('function')
    })
  })

  describe('transformTypeObjectAnswer', () => {
    it('is a function', () => {
      expect(transformTypeObjectAnswer)
        .to.be.a('function')
    })
  })

  describe('transformTypeBooleanAnswer', () => {
    it('is a function', () => {
      expect(transformTypeBooleanAnswer)
        .to.be.a('function')
    })
  })

  describe('transformTypeNullAnswer', () => {
    it('is a function', () => {
      expect(transformTypeNullAnswer)
        .to.be.a('function')
    })
  })

  describe('transformAnswer', () => {
    it('is a function', () => {
      expect(transformAnswer)
        .to.be.a('function')
    })
  })
})
