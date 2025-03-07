const {
  expect // @ts-ignore
} = require('chai')

const {
  components,
  transformers,
  Pinion
} = require('#pinion')

describe('#pinion', () => {
  describe('`components`', () => {
    it('is an object', () => {
      expect(components)
        .to.be.an('object')
    })
  })

  describe('`transformers`', () => {
    it('is an object', () => {
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
