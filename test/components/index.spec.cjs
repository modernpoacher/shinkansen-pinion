const {
  expect // @ts-ignore
} = require('chai')

const {
  Cogs,
  Sprockets
} = require('#pinion/components')

describe('#pinion/components', () => {
  describe('`Cogs`', () => {
    it('is an object', () => {
      expect(Cogs)
        .to.be.an('object')
    })
  })

  describe('`Sprockets`', () => {
    it('is an object', () => {
      expect(Sprockets)
        .to.be.an('object')
    })
  })
})
