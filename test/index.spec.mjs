import {
  expect
} from 'chai'

import {
  components,
  transformers,
  Pinion
} from '#pinion'

describe('#pinion', () => {
  describe('`components`', () => {
    it('is an object', () => {
      expect(components)
        .to.be.a('module') // an('object')
    })
  })

  describe('`transformers`', () => {
    it('is an object', () => {
      expect(transformers)
        .to.be.a('module') // an('object')
    })
  })

  describe('`Pinion`', () => {
    it('is a function', () => {
      expect(Pinion)
        .to.be.a('function')
    })
  })
})
