import {
  expect
} from 'chai'

import {
  Cogs,
  Sprockets
} from '#pinion/components'

describe('#pinion/components', () => {
  describe('`Cogs`', () => {
    it('is a module', () => {
      expect(Cogs)
        .to.be.an('object')
    })
  })

  describe('`Sprockets`', () => {
    it('is a module', () => {
      expect(Sprockets)
        .to.be.an('object')
    })
  })
})
