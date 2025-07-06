import {
  expect
} from 'chai'

import {
  Cogs,
  Sprockets
} from '#pinion/components'

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
