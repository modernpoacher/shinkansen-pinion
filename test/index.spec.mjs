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
    it('is a module', () => {
      expect(components)
        .to.be.an('object')
    })
  })

  describe('`transformers`', () => {
    it('is a module', () => {
      expect(transformers)
        .to.be.an('object')
    })
  })

  describe('`Pinion`', () => {
    it('is a function', () => {
      expect(Pinion)
        .to.be.a('function')
    })
  })
})
