const {
  expect // @ts-ignore
} = require('chai')

const Pinion = require('#pinion/pinion')

describe('#pinion/pinion', () => {
  describe('`Pinion`', () => {
    it('is a function', () => {
      expect(Pinion)
        .to.be.a('function')
    })
  })
})
